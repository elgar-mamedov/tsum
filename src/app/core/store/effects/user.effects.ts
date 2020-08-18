import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import {
  EUserActions,
  GetUsers
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {

  // @Effect()
  // getUsers$ = this.actions$.pipe(
  //   ofType<GetUsers>(EUserActions.GetUsers),
  //   switchMap(() => this.userService.getUsers$())
  // );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {
  }
}
