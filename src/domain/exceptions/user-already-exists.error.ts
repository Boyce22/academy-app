export class UserAlreadyExistsError extends Error {
  constructor(email: string) {
    super(`Já existe um usuário cadastrado com o email: ${email}`);
    this.name = 'UserAlreadyExistsError';
  }
}