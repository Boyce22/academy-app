import { RoleType } from "../enums/user-role.enum";

export class User {
  private readonly _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _role: RoleType;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: RoleType,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date(),
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._role = role;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  static create(props: {
    name: string;
    email: string;
    password: string;
    role: RoleType
  }): User {
    return new User(
      crypto.randomUUID(),
      props.name,
      props.email,
      props.password,
      props.role,
    );
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get role() {
    return this._role;
  }

  get createdAt() {
    return this._createdAt;
  }

  set updatedAt(updatedAt: Date){
    this.updatedAt = updatedAt;
  }

  get updatedAt(){
    return this._updatedAt;
  }

  changeName(name: string) {
    if (name.length < 2) {
      throw new Error('Nome muito curto');
    }
    this._name = name;
  }

  changePassword(newPassword: string) {
    this._password = newPassword;
  }

  changeRole(newRole: RoleType) {
    this._role = newRole;
  }
}
