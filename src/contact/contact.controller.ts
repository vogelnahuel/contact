import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Query,
    BadRequestException,
    Put,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import Response from '../utils/response';
import { CreateContactResponse } from './response/contact.response';
import { SearchContactDto } from './dto/search-contact.dto';
import { Contact } from './entities/contact.entity';
import { ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Phone } from 'src/phone/entities/phone.entity';
import { Home } from 'src/home/entities/home.entity';
import { SearchByAddressDto } from './dto/search-address.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    @ApiOperation({ summary: 'Create Contact' })
    @ApiBody({ type: CreateContactDto })
    @ApiOkResponse({ type: CreateContactResponse })
    async create(@Body() createContactDto: CreateContactDto) {
        const response = await this.contactService.create(createContactDto);
        if (!response) {
            throw new BadRequestException('El contacto ya existe');
        }
        return Response.create<CreateContactResponse>(response);
    }
    @ApiOperation({ summary: 'get by email' })
    @ApiOkResponse({ type: CreateContactResponse })
    @Get('email')
    findByEmail(@Query('email') email: string) {
        return this.contactService.findByEmail(email);
    }

    @Get('/search')
    async searchContacts(@Query() searchContactDto: SearchContactDto): Promise<Contact[]> {
        return this.contactService.searchContacts(searchContactDto);
    }
    @Get('search/phone')
    async searchByPhone(@Query('phone') phone: string): Promise<Phone[]> {
        return this.contactService.searchByPhone(phone);
    }
    @Get('search/address')
    async searchByAddress(@Query() searchByAddressDto: SearchByAddressDto): Promise<Home[]> {
        return this.contactService.searchByAddress(searchByAddressDto);
    }
    @Put(':id')
    async updateContact(
        @Param('id') id: string,
        @Body() updateContactDto: UpdateContactDto,
    ): Promise<Contact> {
        return this.contactService.updateContact(id, updateContactDto);
    }
    @Delete(':id')
    async deleteContact(@Param('id') id: string): Promise<void> {
        await this.contactService.deleteContact(id);
    }
}
