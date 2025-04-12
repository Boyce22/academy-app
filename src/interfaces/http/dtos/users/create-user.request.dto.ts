import { IsEmail, IsNotEmpty, IsString, IsIn } from 'class-validator';
import { getRoleValues, RoleType } from 'src/domain/enums/user-role.enum';

export class CreateUserRequestDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  // @IsIn(getRoleValues()) **todo** criar uma validação que aceite valores nulos
  role: RoleType;
}
