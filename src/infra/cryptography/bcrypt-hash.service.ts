import * as bcrypt from 'bcryptjs';
import { HashGenerator } from 'src/domain/cryptography/hash-generator';
export class BcryptHashService implements HashGenerator {
  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 10);
  }
}
