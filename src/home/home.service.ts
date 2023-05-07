import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { HomeDao } from './home.dao';
import { Home } from './entities/home.entity';
import { CreateHomeResponse } from './response/home.response';
import { SearchByAddressDto } from 'src/contact/dto/search-address.dto';

@Injectable()
export class HomeService {
    constructor(private readonly homeDao: HomeDao) {}

    async create(createHomeDto: CreateHomeDto): Promise<CreateHomeResponse> {
        try {
            const result: Home = await this.homeDao.save(createHomeDto);
            return new CreateHomeResponse(result);
        } catch (error) {
            throw new BadRequestException('Error create');
        }
    }
    async searchByAddress(searchByAddressDto: SearchByAddressDto): Promise<Home[]> {
        try {
            const result: Home[] = await this.homeDao.searchByAddress(searchByAddressDto);
            return result;
        } catch (error) {
            throw new BadRequestException('Error searchByAddress');
        }
    }
    async deleteHomeByContact(id: string) {
        try {
            await this.homeDao.deleteHomeByContact(id);
        } catch (error) {
            throw new BadRequestException('Error deleteHomeByContact');
        }
    }
}
