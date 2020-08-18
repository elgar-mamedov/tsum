import { Action } from '@ngrx/store';
import { IUser } from '../../../shared/models';

export enum EUserActions {
  SaveUser = '[User] Save User',
  GetUsers = '[User] Get Users',
}

export class SaveUser implements Action {
  public readonly type = EUserActions.SaveUser;
  constructor(public payload: IUser) {}
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export type UserActions = SaveUser | GetUsers;
