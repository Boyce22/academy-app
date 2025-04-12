import { UserPresenter } from '../presenters/user.presenter';
import { CreateUserRequestDTO } from '../dtos/users/create-user.request.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/application/use-cases/register.user.use-case';

@Controller('users')
export class UserController {
  constructor(
    private readonly registerUser: RegisterUserUseCase,
  ) {}

  @Post('member-register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() body: CreateUserRequestDTO) {
    const user = await this.registerUser.execute(body);
    return UserPresenter.toHttp(user);
  }
}
