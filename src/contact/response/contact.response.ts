import { ApiProperty } from '@nestjs/swagger';
import { Contact } from '../entities/contact.entity';
import { Phone } from 'src/phone/entities/phone.entity';
import { Home } from 'src/home/entities/home.entity';

export class CreateContactResponse {
    @ApiProperty()
    name: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    document_type: string;
    @ApiProperty()
    document_number: number;
    @ApiProperty()
    age: number;
    @ApiProperty()
    email: string;

    constructor({ name, last_name, document_type, document_number, age, email }) {
        this.name = name;
        this.last_name = last_name;
        this.document_type = document_type;
        this.document_number = document_number;
        this.age = age;
        this.email = email;
    }
}

export class FindByEmailResponse {
    @ApiProperty()
    name: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    document_type: string;
    @ApiProperty()
    document_number: number;
    @ApiProperty()
    age: number;
    @ApiProperty()
    email: string;

    constructor({ name, last_name, document_type, document_number, age, email }) {
        this.name = name;
        this.last_name = last_name;
        this.document_type = document_type;
        this.document_number = document_number;
        this.age = age;
        this.email = email;
    }
}
export class SearchContactsResponse {
    @ApiProperty()
    contacts: Contact[];

    constructor(contacts: Contact[]) {
        this.contacts = contacts;
    }
}

export class SearchByPhoneResponse {
    @ApiProperty()
    phones: Phone[];

    constructor(phones: Phone[]) {
        this.phones = phones;
    }
}

export class SearchByAddressResponse {
    @ApiProperty()
    homes: Home[];

    constructor(homes: Home[]) {
        this.homes = homes;
    }
}

export class UpdateContactResponse {
    @ApiProperty()
    name: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    document_type: string;
    @ApiProperty()
    document_number: number;
    @ApiProperty()
    age: number;
    @ApiProperty()
    email: string;

    constructor({ name, last_name, document_type, document_number, age, email }) {
        this.name = name;
        this.last_name = last_name;
        this.document_type = document_type;
        this.document_number = document_number;
        this.age = age;
        this.email = email;
    }
}
