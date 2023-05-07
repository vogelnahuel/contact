import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactDao } from './contact.dao';
import { PhoneService } from 'src/phone/phone.service';
import { HomeService } from 'src/home/home.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './entities/contact.entity';
import { PhoneDao } from 'src/phone/phone.dao';
import { HomeDao } from 'src/home/home.dao';
import { Phone, PhoneSchema } from 'src/phone/entities/phone.entity';
import { Home, HomeSchema } from 'src/home/entities/home.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Contact.name, schema: ContactSchema },
            { name: Phone.name, schema: PhoneSchema },
            { name: Home.name, schema: HomeSchema },
        ]),
    ],
    controllers: [ContactController],
    providers: [ContactService, ContactDao, PhoneService, HomeService, PhoneDao, HomeDao],
})
export class ContactModule {}
