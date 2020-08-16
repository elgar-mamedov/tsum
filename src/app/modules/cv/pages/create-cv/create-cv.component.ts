import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCvComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onSave(): void {
    console.log('CreateCvComponent.onSave');
  }

}
