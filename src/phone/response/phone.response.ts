import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneResponse {
    @ApiProperty()
    type: string;
    @ApiProperty()
    number: number;

    constructor({ type, number }) {
        this.type = type;
        this.number = number;
    }
}
