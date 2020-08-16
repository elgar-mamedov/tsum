import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GenderModel } from '../../../../shared/models';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenderComponent implements OnInit {
  public gender: GenderModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
