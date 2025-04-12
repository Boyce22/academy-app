import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { Roles } from 'src/domain/enums/user-role.enum';
import { CreateUserDTO } from '../dtos/users/create.user.dto';
import { HashGenerator } from 'src/domain/cryptography/hash-generator';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserAlreadyExistsError } from 'src/domain/exceptions/user-already-exists.error';
@Injectable()
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator,
  ) { }

  async execute(userDTO: CreateUserDTO): Promise<User> {
    const exists = await this.userRepository.findByEmail(userDTO.email);

    if (exists) {
      throw new UserAlreadyExistsError(exists.email);
    }

    const hashedPassword = await this.hashGenerator.hash(userDTO.password);

    const user = User.create({
      ...userDTO,
      role: Roles.MEMBRO,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    return user;
  }
}
