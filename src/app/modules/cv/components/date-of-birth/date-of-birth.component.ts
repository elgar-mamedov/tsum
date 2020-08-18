import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateOfBirthComponent {
  // tslint:disable-next-line:variable-name
  private _value: Date;

  get value(): Date {
    return this._value;
  }

  @Input()
  set value(val: Date) {
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
  valueChange = new EventEmitter<Date>();
}
