import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FioComponent implements OnInit {
  fio = new FormControl('', [Validators.required, Validators.pattern(CommonService.CYRILLIC_PATTERN)]);

  getErrorMessage(): string {
    if (this.fio.hasError('required')) {
      return 'Пожалуйста, укажите имя';
    }

    return this.fio.hasError('pattern') ? 'Можно вводить только на русском языке' : '';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
