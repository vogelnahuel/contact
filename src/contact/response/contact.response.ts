import { ApiProperty } from '@nestjs/swagger';

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
