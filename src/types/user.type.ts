export interface IUser {
  name: string;
  email: string;
  position: string;
}

export interface ICreateUser extends Partial<IUser> {
  name: string;
  email: string;
  position: string;
}
