import { Module } from '@nestjs/common';
import { InfraProviders } from './infra/providers';
import { RegisterStudentUseCase } from './application/use-cases/register-student.use-case';
import { StudentsController } from './interfaces/http/controllers/students.controller';
import { PrismaModule } from './infra/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StudentsController],
  providers: [
    RegisterStudentUseCase,
    ...InfraProviders,               
  ],
})
export class AppModule {}
