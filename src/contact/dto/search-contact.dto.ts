import { IsOptional, IsString, IsEmail } from 'class-validator';

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
    @IsString()
    document_number?: number;

    @IsOptional()
    @IsString()
    age?: number;

    @IsOptional()
    @IsEmail()
    email?: string;
}
