export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

export const users: Array<IUser> = [];
