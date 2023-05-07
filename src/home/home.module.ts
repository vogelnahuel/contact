import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { HomeDao } from './home.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { Home, HomeSchema } from './entities/home.entity';

@Module({
    imports: [MongooseModule.forFeature([{ name: Home.name, schema: HomeSchema }])],
    controllers: [HomeController],
    providers: [HomeService, HomeDao],
})
export class HomeModule {}
