import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { HomeDao } from './home.dao';
import { Home } from './entities/home.entity';
import { CreateHomeResponse } from './response/home.response';

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

    findAll() {
        return `This action returns all home`;
    }

    findOne(id: number) {
        return `This action returns a #${id} home`;
    }

    update(id: number, updateHomeDto: UpdateHomeDto) {
        return `This action updates a #${id} home`;
    }

    remove(id: number) {
        return `This action removes a #${id} home`;
    }
}
