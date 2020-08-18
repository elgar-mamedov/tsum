import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { SaveUser } from '../store/actions/user.actions';
import { IUser } from '../../shared/models';
import { Observable } from 'rxjs';
import { selectUserList } from '../store/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store<IAppState>) {
  }

  saveUser(data: IUser): void {
    this.store.dispatch(new SaveUser(data));
  }

  getUsers$(): Observable<IUser[]> {
    return this.store.pipe(select(selectUserList));
  }
}
