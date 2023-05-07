import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export class SearchContactDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    last_name?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    document_type?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    document_number?: number;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    age?: number;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsEmail()
    email?: string;
}
