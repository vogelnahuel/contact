import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateHomeDto {
    @ApiProperty()
    @IsString()
    locality: string;

    @IsString()
    @ApiProperty()
    street: string;

    @IsNumber()
    @ApiProperty()
    street_number: number;

    @IsString()
    @ApiProperty()
    description: string;

    contact?: string;
}
