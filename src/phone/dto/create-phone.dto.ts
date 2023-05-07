import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePhoneDto {
    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsNumber()
    number: number;

    contact?: string;
}
