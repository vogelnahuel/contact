import { IsNumber, IsString } from 'class-validator';

export class CreatePhoneDto {
    @IsString()
    type: string;

    @IsNumber()
    number: number;
}
