import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

@ApiTags('users')
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  password: string;
}
