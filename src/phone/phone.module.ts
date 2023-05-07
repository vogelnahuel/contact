import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import { PhoneDao } from './phone.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { Phone, PhoneSchema } from './entities/phone.entity';

@Module({
    imports: [MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }])],
    controllers: [PhoneController],
    providers: [PhoneService, PhoneDao],
})
export class PhoneModule {}
