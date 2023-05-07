import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class SearchByAddressDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    street: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    streetNumber: string;
}
