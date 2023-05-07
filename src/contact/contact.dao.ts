import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { SearchContactDto } from './dto/search-contact.dto';

@Injectable()
export class ContactDao {
    constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>) {}

    async save(createHolidayDto: CreateContactDto): Promise<Contact> {
        return await this.contactModel.create(createHolidayDto);
    }
    async findByEmail(email: string): Promise<Contact> {
        return await this.contactModel.findOne({ email });
    }
    async searchContacts(searchContactDto: SearchContactDto): Promise<Contact[]> {
        const matchQuery = {};

        for (const [field, value] of Object.entries(searchContactDto)) {
            if (value) {
                matchQuery[field] = value;
            }
        }

        return this.contactModel.aggregate([{ $match: matchQuery }]).exec();
    }
    async findById(id: string): Promise<Contact> {
        return await this.contactModel.findById(id);
    }
    async deleteContact(id: string): Promise<void> {
        await this.contactModel.findByIdAndDelete(id);
    }
}
