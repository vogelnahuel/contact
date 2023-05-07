import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateContactResponse } from './response/contact.response';
import { ContactDao } from './contact.dao';
import { Contact } from './entities/contact.entity';
import { PhoneService } from '../phone/phone.service';
import { HomeService } from '../home/home.service';
import { getModelToken } from '@nestjs/mongoose';

describe('ContactController', () => {
    let controller: ContactController;
    let contactService: ContactService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ContactController],
            providers: [
                ContactService,
                ContactDao,
                {
                    provide: getModelToken(Contact.name),
                    useValue: jest.fn(),
                },
                {
                    provide: PhoneService,
                    useValue: {
                        create: jest.fn(),
                    },
                },
                {
                    provide: HomeService,
                    useValue: {
                        create: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<ContactController>(ContactController);
        contactService = module.get<ContactService>(ContactService);
    });

    describe('create', () => {
        it('should create a contact', async () => {
            // Arrange
            const createContactDto: CreateContactDto = {
                name: 'John',
                last_name: 'Doe',
                email: 'john.doe@example.com',
                phones: [
                    {
                        number: 123456789,
                        type: 'mobile',
                    },
                ],
                homes: [
                    {
                        locality: '123 Main St',
                        street: 'City',
                        street_number: 0,
                        description: 'Country',
                    },
                ],
                document_type: '',
                document_number: 0,
                age: 0,
            };

            const expectedResponse: CreateContactResponse = {
                name: 'John',
                last_name: 'Doe',
                email: 'john.doe@example.com',
                document_type: '',
                document_number: 0,
                age: 0,
            };

            // Mock the methods of the service and DAO
            jest.spyOn(contactService, 'create').mockResolvedValue(expectedResponse);
            jest.spyOn(contactService['contactDao'], 'findByEmail').mockResolvedValue(null);
            jest.spyOn(contactService['contactDao'], 'save').mockResolvedValue({
                _id: '1',
                ...createContactDto,
            } as Contact);

            jest.spyOn(contactService['phoneService'], 'create').mockResolvedValue(null);
            jest.spyOn(contactService['homeService'], 'create').mockResolvedValue(null);

            // Act
            const response = await controller.create(createContactDto);

            // Assert
            expect(response.result.email).toEqual(expectedResponse.email);
        });
    });
});
