import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactDao } from './contact.dao';
import { Contact } from './entities/contact.entity';
import { CreateContactResponse } from './response/contact.response';
import { SearchContactDto } from './dto/search-contact.dto';

@Injectable()
export class ContactService {
    constructor(private readonly contactDao: ContactDao) {}

    async create(createContactDto: CreateContactDto): Promise<CreateContactResponse> {
        try {
            const result: Contact = await this.contactDao.save(createContactDto);
            return new CreateContactResponse(result);
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

    update(id: number, updateContactDto: UpdateContactDto) {
        return `This action updates a #${id} contact`;
    }

    remove(id: number) {
        return `This action removes a #${id} contact`;
    }
}
