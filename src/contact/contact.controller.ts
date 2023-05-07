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
import {
    CreateContactResponse,
    FindByEmailResponse,
    SearchByAddressResponse,
    SearchByPhoneResponse,
    SearchContactsResponse,
    UpdateContactResponse,
} from './response/contact.response';
import { SearchContactDto } from './dto/search-contact.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { SearchByAddressDto } from './dto/search-address.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FindByEmailDto } from './dto/find-email-contact.dto';

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
    @ApiQuery({ name: 'email', required: true })
    @ApiOkResponse({ type: FindByEmailResponse })
    @Get('email')
    async findByEmail(@Query() dto: FindByEmailDto) {
        const response: FindByEmailResponse = await this.contactService.findByEmail(dto.email);
        return Response.create<FindByEmailResponse>(response);
    }

    @Get('/search')
    @ApiOperation({ summary: 'Search contacts' })
    @ApiQuery({ type: SearchContactDto })
    @ApiOkResponse({ type: SearchContactsResponse })
    async searchContacts(@Query() searchContactDto: SearchContactDto) {
        const response = await this.contactService.searchContacts(searchContactDto);
        return Response.create<SearchContactsResponse>(response);
    }
    @Get('search/phone')
    @ApiOperation({ summary: 'Search contacts By Phone' })
    @ApiQuery({ name: 'phone', required: true })
    @ApiOkResponse({ type: SearchByPhoneResponse })
    async searchByPhone(@Query('phone') phone: string) {
        const response = await this.contactService.searchByPhone(phone);
        return Response.create<SearchByPhoneResponse>(response);
    }
    @Get('search/address')
    @ApiOperation({ summary: 'Search contacts By Address' })
    @ApiQuery({ type: SearchByAddressDto })
    @ApiOkResponse({ type: SearchByAddressResponse })
    async searchByAddress(@Query() searchByAddressDto: SearchByAddressDto) {
        const response = await this.contactService.searchByAddress(searchByAddressDto);
        return Response.create<SearchByAddressResponse>(response);
    }
    @Put(':id')
    @ApiOperation({ summary: 'update Contact' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiBody({ type: UpdateContactDto })
    @ApiOkResponse({ type: UpdateContactResponse })
    async updateContact(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
        const response = await this.contactService.updateContact(id, updateContactDto);
        return Response.create<UpdateContactResponse>(response);
    }
    @Delete(':id')
    @ApiOperation({ summary: 'delete Contact' })
    @ApiParam({ name: 'id', type: 'string' })
    async deleteContact(@Param('id') id: string) {
        await this.contactService.deleteContact(id);
    }
}
