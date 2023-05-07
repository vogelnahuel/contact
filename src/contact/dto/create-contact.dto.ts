import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    ArrayNotEmpty,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested,
} from 'class-validator';
import { CreateHomeDto } from 'src/home/dto/create-home.dto';
import { CreatePhoneDto } from 'src/phone/dto/create-phone.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    last_name: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    document_type: string;
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    document_number: number;
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: number;
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty({ type: () => [CreatePhoneDto] })
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreatePhoneDto)
    phones?: CreatePhoneDto[];
    @ApiProperty({ type: () => [CreateHomeDto] })
    @ApiProperty()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateHomeDto)
    homes?: CreateHomeDto[];
}
