import { User as PrismaUser } from '@prisma/client';
import { RoleType } from 'src/domain/enums/user-role.enum';

export class UserModel implements PrismaUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: RoleType; 
  createdAt: Date;
}
