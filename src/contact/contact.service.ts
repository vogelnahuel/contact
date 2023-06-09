import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactDao } from './contact.dao';
import { Contact } from './entities/contact.entity';
import {
    CreateContactResponse,
    FindByEmailResponse,
    SearchByAddressResponse,
    SearchByPhoneResponse,
    SearchContactsResponse,
    UpdateContactResponse,
} from './response/contact.response';
import { SearchContactDto } from './dto/search-contact.dto';
import { PhoneService } from '../phone/phone.service';
import { HomeService } from '../home/home.service';
import { CreatePhoneDto } from '../phone/dto/create-phone.dto';
import { CreateHomeDto } from '../home/dto/create-home.dto';
import { Phone } from '../phone/entities/phone.entity';
import { SearchByAddressDto } from './dto/search-address.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreatePhoneResponse } from '../phone/response/phone.response';
import { CreateHomeResponse } from '../home/response/home.response';
import { Home } from '../home/entities/home.entity';

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
            const existContact: Contact = await this.contactDao.findByEmail(createContactDto.email);
            if (existContact) {
                return null;
            }
            const contact: Contact = await this.contactDao.save(contactData);

            const phonePromises: Promise<CreatePhoneResponse>[] = phones.map(
                (phone: CreatePhoneDto) =>
                    this.phoneService.create({ ...phone, contact: contact._id }),
            );
            await Promise.all(phonePromises);

            const homePromises: Promise<CreateHomeResponse>[] = homes.map((home: CreateHomeDto) =>
                this.homeService.create({ ...home, contact: contact._id }),
            );
            await Promise.all(homePromises);

            return new CreateContactResponse(contact);
        } catch (error) {
            throw new BadRequestException('Error create');
        }
    }
    async findByEmail(email: string): Promise<FindByEmailResponse> {
        try {
            const result: Contact = await this.contactDao.findByEmail(email);
            return new FindByEmailResponse(result);
        } catch (error) {
            throw new BadRequestException('Error findByEmail');
        }
    }
    async searchContacts(searchContactDto: SearchContactDto): Promise<SearchContactsResponse> {
        try {
            if (searchContactDto.document_number) {
                searchContactDto.document_number = Number(searchContactDto.document_number);
            }
            if (searchContactDto.age) {
                searchContactDto.age = Number(searchContactDto.age);
            }
            const result: Contact[] = await this.contactDao.searchContacts(searchContactDto);
            return new SearchContactsResponse(result);
        } catch (error) {
            throw new BadRequestException('Error searchContacts');
        }
    }
    async searchByPhone(phone: string): Promise<SearchByPhoneResponse> {
        try {
            const result: Phone[] = await this.phoneService.searchByPhone(Number(phone));
            return new SearchByPhoneResponse(result);
        } catch (error) {
            throw new BadRequestException('Error searchByPhone');
        }
    }
    async searchByAddress(
        searchByAddressDto: SearchByAddressDto,
    ): Promise<SearchByAddressResponse> {
        try {
            const result: Home[] = await this.homeService.searchByAddress(searchByAddressDto);
            return new SearchByAddressResponse(result);
        } catch (error) {
            throw new BadRequestException('Error searchByAddress');
        }
    }
    async updateContact(
        id: string,
        updateContactDto: UpdateContactDto,
    ): Promise<UpdateContactResponse> {
        try {
            const contact: Contact = await this.contactDao.findById(id);
            if (!contact) {
                return null;
            }
            contact.name = updateContactDto.name || contact.name;
            contact.last_name = updateContactDto.last_name || contact.last_name;
            contact.age = updateContactDto.age || contact.age;
            if (updateContactDto.phones) {
                await this.phoneService.deletePhonesByContact(contact._id);
                const phonePromises = updateContactDto.phones.map((phone: CreatePhoneDto) =>
                    this.phoneService.create({ ...phone, contact: contact._id }),
                );
                await Promise.all(phonePromises);
            }

            if (updateContactDto.homes) {
                await this.homeService.deleteHomeByContact(contact._id);

                const homePromises = updateContactDto.homes.map((home: CreateHomeDto) =>
                    this.homeService.create({ ...home, contact: contact._id }),
                );
                await Promise.all(homePromises);
            }

            const result: Contact = await contact.save();

            return new UpdateContactResponse(result);
        } catch (error) {
            throw new BadRequestException('Error updateContact');
        }
    }
    async deleteContact(id: string): Promise<void> {
        try {
            await this.contactDao.deleteContact(id);
            await this.phoneService.deletePhonesByContact(id);
            await this.homeService.deleteHomeByContact(id);
        } catch (error) {
            throw new BadRequestException('Error deleteContact');
        }
    }
}
