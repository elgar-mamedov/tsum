import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-amount-of-children',
  templateUrl: './amount-of-children.component.html',
  styleUrls: ['./amount-of-children.component.scss']
})
export class AmountOfChildrenComponent {
  // tslint:disable-next-line:variable-name
  private _value: number;

  get value(): number {
    return this._value;
  }

  @Input()
  set value(val: number) {
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
  valueChange = new EventEmitter<number>();

  onKeydown(event: KeyboardEvent): void {
    if (event.code === 'F1') {
      this.value++;
    } else if (event.code === 'F2') {
      this.value--;
    }
  }
}
