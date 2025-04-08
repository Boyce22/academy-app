import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { HashGenerator } from 'src/domain/cryptography/hash-generator';

@Injectable()
export class BcryptHashService implements HashGenerator {
  async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, 10);
  }
}
