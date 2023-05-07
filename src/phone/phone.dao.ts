import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phone } from './entities/phone.entity';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Injectable()
export class PhoneDao {
    constructor(@InjectModel(Phone.name) private phoneModel: Model<Phone>) {}

    async save(createHolidayDto: CreatePhoneDto): Promise<Phone> {
        return await this.phoneModel.create(createHolidayDto);
    }
}
