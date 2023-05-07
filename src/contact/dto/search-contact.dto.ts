import { IsOptional, IsString, IsNumber, IsEmail } from 'class-validator';

export class SearchContactDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    last_name?: string;

    @IsOptional()
    @IsString()
    document_type?: string;

    @IsOptional()
    @IsNumber()
    document_number?: number;

    @IsOptional()
    @IsNumber()
    age?: number;

    @IsOptional()
    @IsEmail()
    email?: string;
}
