import { ApiProperty } from '@nestjs/swagger';

export class FindByEmailDto {
    @ApiProperty()
    email: string;
}
