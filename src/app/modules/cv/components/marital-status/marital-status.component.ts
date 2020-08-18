import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GenderModel, MaterialStatusModel } from '../../../../shared/models';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaritalStatusComponent {
  materialStatus = MaterialStatusModel;

  // tslint:disable-next-line:variable-name
  private _value: MaterialStatusModel;

  get value(): MaterialStatusModel {
    return this._value;
  }

  @Input()
  set value(val: MaterialStatusModel) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Input()
  gender: GenderModel;

  @Input()
  required?: boolean;

  @Input()
  hasError?: boolean;

  @Input()
  errorMsg?: string;

  @Output()
  valueChange = new EventEmitter<MaterialStatusModel>();

  get isMale(): boolean {
    return !this.gender || this.gender === GenderModel.MALE;
  }

  get isFeMale(): boolean {
    return !this.gender || this.gender === GenderModel.FEMALE;
  }
}
