import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Home } from './entities/home.entity';
import { CreateHomeDto } from './dto/create-home.dto';

@Injectable()
export class HomeDao {
    constructor(@InjectModel(Home.name) private homeModel: Model<Home>) {}

    async save(createHolidayDto: CreateHomeDto): Promise<Home> {
        return await this.homeModel.create(createHolidayDto);
    }
}
