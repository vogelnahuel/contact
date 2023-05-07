import { Controller, Post, Body } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';

@Controller('home')
export class HomeController {
    constructor(private readonly homeService: HomeService) {}

    @Post()
    create(@Body() createHomeDto: CreateHomeDto) {
        return this.homeService.create(createHomeDto);
    }
}
