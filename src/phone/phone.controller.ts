import { Controller, Post, Body } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Controller('phone')
export class PhoneController {
    constructor(private readonly phoneService: PhoneService) {}

    @Post()
    create(@Body() createPhoneDto: CreatePhoneDto) {
        return this.phoneService.create(createPhoneDto);
    }
}
