import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    ArrayNotEmpty,
    IsEmail,
    IsNumber,
    IsString,
    ValidateNested,
} from 'class-validator';
import { CreateHomeDto } from 'src/home/dto/create-home.dto';
import { CreatePhoneDto } from 'src/phone/dto/create-phone.dto';

export class CreateContactDto {
    @IsString()
    name: string;

    @IsString()
    last_name: string;

    @IsString()
    document_type: string;

    @IsNumber()
    document_number: number;

    @IsNumber()
    age: number;

    @IsEmail()
    email: string;

    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreatePhoneDto)
    phones: CreatePhoneDto[];
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateHomeDto)
    homes: CreateHomeDto[];
}
