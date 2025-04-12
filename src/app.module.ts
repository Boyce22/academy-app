import { Module } from '@nestjs/common';
import { UsersModule } from './interfaces/http/modules/users.module';

@Module({
    imports: [UsersModule]
})
export class AppModule { }
