import { UserPresenter } from '../presenters/user.presenter';
import { CreateUserRequestDTO } from '../dtos/auth/create-user.request.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterStudentUseCase } from 'src/application/use-cases/register-student.use-case';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly registerStudentUseCase: RegisterStudentUseCase,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() body: CreateUserRequestDTO) {
    const user = await this.registerStudentUseCase.execute(body);
    return UserPresenter.toHttp(user);
  }
}
