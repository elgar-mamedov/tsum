import { IUser } from '../../../shared/models';

export interface IUserState {
  users: IUser[];
}

export const initialUserState: IUserState = {
  users: [],
};
