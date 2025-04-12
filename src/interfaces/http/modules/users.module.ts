import { Module } from "@nestjs/common";
import { UserController } from "../controllers/user.controller";
import { RegisterUserUseCase } from "src/application/use-cases/register.user.use-case";

@Module({
    controllers: [UserController],
    providers: [RegisterUserUseCase,],
    exports: [RegisterUserUseCase],
})


export class UsersModule { }