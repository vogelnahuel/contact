import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ContactDao } from './contact.dao';

@Module({
    controllers: [ContactController],
    providers: [ContactService, ContactDao],
})
export class ContactModule {}
