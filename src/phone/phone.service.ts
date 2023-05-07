import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PhoneDao } from './phone.dao';
import { CreatePhoneResponse } from './response/phone.response';
import { Phone } from './entities/phone.entity';

@Injectable()
export class PhoneService {
    constructor(private readonly phoneDao: PhoneDao) {}
    async create(createHomeDto: CreatePhoneDto): Promise<CreatePhoneResponse> {
        try {
            const result: Phone = await this.phoneDao.save(createHomeDto);
            return new CreatePhoneResponse(result);
        } catch (error) {
            throw new BadRequestException('Error create');
        }
    }
    findAll() {
        return `This action returns all phone`;
    }

    findOne(id: number) {
        return `This action returns a #${id} phone`;
    }

    update(id: number, updatePhoneDto: UpdatePhoneDto) {
        return `This action updates a #${id} phone`;
    }

    remove(id: number) {
        return `This action removes a #${id} phone`;
    }
}
