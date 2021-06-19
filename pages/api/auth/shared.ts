export type User = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

export interface IUser extends User {
  id: string;
}

export const users: Array<IUser> = [];
