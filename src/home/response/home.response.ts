import { ApiProperty } from '@nestjs/swagger';

export class CreateHomeResponse {
    @ApiProperty()
    locality: string;
    @ApiProperty()
    street: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    street_number: number;

    constructor({ locality, street, description, street_number }) {
        this.locality = locality;
        this.street = street;
        this.description = description;
        this.street_number = street_number;
    }
}
