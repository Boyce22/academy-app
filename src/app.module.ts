import { Module } from '@nestjs/common';
import { InfraProviders } from './infra/providers';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { MembersController } from './interfaces/http/controllers/members.controller';
import { RegisterMemberUseCase } from './application/use-cases/register-member.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [MembersController],
  providers: [
    RegisterMemberUseCase,
    ...InfraProviders,               
  ],
})
export class AppModule {}
