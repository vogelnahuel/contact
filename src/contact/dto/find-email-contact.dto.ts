import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindByEmailDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    email: string;
}
