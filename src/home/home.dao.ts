import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Home } from './entities/home.entity';
import { CreateHomeDto } from './dto/create-home.dto';
import { SearchByAddressDto } from 'src/contact/dto/search-address.dto';

@Injectable()
export class HomeDao {
    constructor(@InjectModel(Home.name) private homeModel: Model<Home>) {}

    async save(createHolidayDto: CreateHomeDto): Promise<Home> {
        return await this.homeModel.create(createHolidayDto);
    }
    async searchByAddress(searchByAddressDto: SearchByAddressDto): Promise<Home[]> {
        return await this.homeModel.find({
            street: searchByAddressDto.street,
            street_number: searchByAddressDto.streetNumber,
        });
    }
    async deleteHomeByContact(id: string): Promise<void> {
        await this.homeModel.deleteMany({ contact: new Types.ObjectId(id) });
    }
}
