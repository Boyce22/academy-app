import { User } from 'src/domain/entities/user.entity';
import { Roles } from 'src/domain/enums/user-role.enum';
import { CreateStudentDTO } from '../dtos/students/create-student.dto';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserAlreadyExistsError } from 'src/domain/exceptions/user-already-exists.error';
import { HashGenerator } from 'src/domain/cryptography/hash-generator';

export class RegisterStudentUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator,
  ) {}

  async execute(userDTO: CreateStudentDTO): Promise<User> {
    const exists = await this.userRepository.findByEmail(userDTO.email);

    if (exists)
      throw new UserAlreadyExistsError(
        'Já existe um cadastro para esse usuário.',
      );

    const hashedPassword = await this.hashGenerator.hash(userDTO.password);

    const user = User.create({
      ...userDTO,
      role: Roles.ALUNO,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    return user;
  }
}
