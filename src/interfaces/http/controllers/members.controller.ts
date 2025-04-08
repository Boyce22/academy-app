import { UserPresenter } from '../presenters/user.presenter';
import { CreateUserRequestDTO } from '../dtos/auth/create-user.request.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterMemberUseCase } from 'src/application/use-cases/register-member.use-case';

@Controller('member')
export class MembersController {
  constructor(
    private readonly registerStudentUseCase: RegisterMemberUseCase,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() body: CreateUserRequestDTO) {
    const user = await this.registerStudentUseCase.execute(body);
    return UserPresenter.toHttp(user);
  }
}
