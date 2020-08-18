import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
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
