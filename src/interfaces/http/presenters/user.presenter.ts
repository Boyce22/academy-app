import { User } from 'src/domain/entities/user.entity';

export class UserPresenter {
  static toHttp(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}
