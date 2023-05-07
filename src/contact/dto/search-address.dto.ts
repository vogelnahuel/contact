import { IsString, IsNotEmpty } from 'class-validator';

export class SearchByAddressDto {
    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsString()
    streetNumber: string;
}
