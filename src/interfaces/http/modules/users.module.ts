import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { HashGenerator } from 'src/domain/cryptography/hash-generator';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { BcryptHashService } from 'src/infra/cryptography/bcrypt-hash.service';
import { PrismaUserRepository } from 'src/infra/database/prisma/user.repository';
import { RegisterUserUseCase } from 'src/application/use-cases/register.user.use-case';


@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: HashGenerator,
      useClass: BcryptHashService,
    },
    RegisterUserUseCase,
  ],
  exports: [RegisterUserUseCase],
})
export class UsersModule {}
