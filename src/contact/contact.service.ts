import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactDao } from './contact.dao';
import { Contact } from './entities/contact.entity';
import { CreateContactResponse } from './response/contact.response';
import { SearchContactDto } from './dto/search-contact.dto';
import { PhoneService } from 'src/phone/phone.service';
import { HomeService } from 'src/home/home.service';
import { CreatePhoneDto } from 'src/phone/dto/create-phone.dto';
import { CreateHomeDto } from 'src/home/dto/create-home.dto';

@Injectable()
export class ContactService {
    constructor(
        private readonly contactDao: ContactDao,
        private readonly phoneService: PhoneService,
        private readonly homeService: HomeService,
    ) {}

    async create(createContactDto: CreateContactDto): Promise<CreateContactResponse> {
        try {
            const { phones, homes, ...contactData } = createContactDto;
            const contact: Contact = await this.contactDao.save(contactData);

            const phonePromises = phones.map((phone: CreatePhoneDto) =>
                this.phoneService.create(phone),
            );
            await Promise.all(phonePromises);

            const homePromises = homes.map((home: CreateHomeDto) => this.homeService.create(home));
            await Promise.all(homePromises);

            return new CreateContactResponse(contact);
        } catch (error) {
            throw new BadRequestException('Error create');
        }
    }
    async findByEmail(email: string): Promise<CreateContactResponse> {
        try {
            const result: Contact = await this.contactDao.findByEmail(email);
            return new CreateContactResponse(result);
        } catch (error) {
            throw new BadRequestException('Error create');
        }
    }
    async searchContacts(searchContactDto: SearchContactDto) {
        try {
            const result: Contact[] = await this.contactDao.searchContacts(searchContactDto);
            return result;
        } catch (error) {
            throw new BadRequestException('Error create');
        }
    }

    findAll() {
        return `This action returns all contact`;
    }

    findOne(id: number) {
        return `This action returns a #${id} contact`;
    }

    remove(id: number) {
        return `This action removes a #${id} contact`;
    }
}
