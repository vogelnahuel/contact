import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
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
    async searchByPhone(phone: number): Promise<Phone[]> {
        try {
            const result: Phone[] = await this.phoneDao.searchByPhone(phone);
            return result;
        } catch (error) {
            throw new BadRequestException('Error searchByPhone');
        }
    }
    async deletePhonesByContact(id: string): Promise<void> {
        try {
            await this.phoneDao.deletePhonesByContact(id);
        } catch (error) {
            throw new BadRequestException('Error deletePhonesByContact');
        }
    }
}
