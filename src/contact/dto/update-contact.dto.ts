import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, ValidateNested, ArrayNotEmpty, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePhoneDto } from 'src/phone/dto/create-phone.dto';
import { CreateHomeDto } from 'src/home/dto/create-home.dto';

export class UpdateContactDto {
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

    @ApiProperty({ required: false, type: () => [CreatePhoneDto] })
    @ArrayNotEmpty()
    @IsOptional()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreatePhoneDto)
    phones?: CreatePhoneDto[];

    @ApiProperty({ required: false, type: () => [CreateHomeDto] })
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateHomeDto)
    homes?: CreateHomeDto[];
}
