import { EUserActions } from '../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.SaveUser: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }

    default:
      return state;
  }
};
