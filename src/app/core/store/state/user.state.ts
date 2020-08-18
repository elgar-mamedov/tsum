import { IUser } from '../../../shared/models';

export interface IUserState {
  users: IUser[];
}

export const initialUserState: IUserState = {
  // users: [],
  users: [
    {
      id: 1,
      firstName: 'Иванов Иван Иванович',
      gender: 'male',
      materialStatus: 'married',
      amountOfChildren: 2,
      email: 'ivan@ivan',
      comment: 'комент',
      dateOfBirth: '1/1/1990'
    },
    {
      id: 2,
      firstName: 'Иванова Ольга Андреевна',
      gender: 'female',
      materialStatus: 'married',
      amountOfChildren: 1,
      email: 'masha@masha',
      comment: 'комент',
      dateOfBirth: '1/1/1997'
    }
  ],
};
