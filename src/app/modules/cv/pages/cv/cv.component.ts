import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../../../../shared/models';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent implements OnInit {
  users$: Observable<IUser[]> = this.userService.getUsers$();
  Object = Object;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }
}
