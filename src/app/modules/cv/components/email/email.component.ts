import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailComponent {
  // tslint:disable-next-line:variable-name
  private _value: string;

  get value(): string {
    return this._value;
  }

  @Input()
  set value(val: string) {
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
  valueChange = new EventEmitter<string>();
}
