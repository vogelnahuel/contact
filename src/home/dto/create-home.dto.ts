import { IsNumber, IsString } from 'class-validator';

export class CreateHomeDto {
    @IsString()
    locality: string;

    @IsString()
    street: string;

    @IsNumber()
    street_number: number;

    @IsString()
    description: string;
}
