import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenderModel } from '../../../../shared/models';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenderComponent {
  // tslint:disable-next-line:variable-name
  private _value: GenderModel;

  get value(): GenderModel {
    return this._value;
  }

  @Input()
  set value(val: GenderModel) {
    this._value = val;
    this.valueChange.emit(this._value);
  }


  @Input()
  required?: boolean;

  @Input()
  hasError?: boolean;

  @Input()
  errorMsg?: string;

  @Output()
  valueChange = new EventEmitter<GenderModel>();
}
