import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Phone } from './entities/phone.entity';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Injectable()
export class PhoneDao {
    constructor(@InjectModel(Phone.name) private phoneModel: Model<Phone>) {}

    async save(createHolidayDto: CreatePhoneDto): Promise<Phone> {
        return await this.phoneModel.create(createHolidayDto);
    }
    async searchByPhone(phone: number): Promise<Phone[]> {
        return await this.phoneModel.find({ number: phone }).populate('contact');
    }
    async deletePhonesByContact(id: string): Promise<void> {
        await this.phoneModel.deleteMany({ contact: new Types.ObjectId(id) });
    }
}
