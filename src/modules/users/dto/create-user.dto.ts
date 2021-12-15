import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
