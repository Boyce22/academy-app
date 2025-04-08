import { HashGenerator } from 'src/domain/cryptography/hash-generator';
import { BcryptHashService } from './cryptography/bcrypt-hash.service';

import { UserRepository } from 'src/domain/repositories/user.repository';
import { PrismaUserRepository } from './database/prisma/user.repository';

export const InfraProviders = [
  {
    provide: UserRepository,
    useClass: PrismaUserRepository,
  },
  {
    provide: HashGenerator,
    useClass: BcryptHashService,
  },
];
