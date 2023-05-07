import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import Response from '../utils/response';
import { CreateContactResponse } from './response/contact.response';
import { SearchContactDto } from './dto/search-contact.dto';
import { Contact } from './entities/contact.entity';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    async create(@Body() createContactDto: CreateContactDto) {
        const response = await this.contactService.create(createContactDto);
        return Response.create<CreateContactResponse>(response);
    }

    @Get()
    findAll() {
        return this.contactService.findAll();
    }
    @Get()
    findByEmail(@Query('email') email: string) {
        return this.contactService.findByEmail(email);
    }
    @Get('/search')
    async searchContacts(@Query() searchContactDto: SearchContactDto): Promise<Contact[]> {
        return this.contactService.searchContacts(searchContactDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contactService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
        return this.contactService.update(+id, updateContactDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contactService.remove(+id);
    }
}
