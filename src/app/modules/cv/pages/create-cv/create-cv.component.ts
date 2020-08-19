import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CYRILLIC_PATTERN, EMAIL_PATTERN } from '../../../../core/services/common.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { RxUnsubscribe } from '../../../../core/services/rx-unsubscribe';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../shared/models';

enum Controls {
  FIRST_NAME = 'firstName',
  GENDER = 'gender',
  MATERIAL_STATUS = 'materialStatus',
  AMOUNT_OF_CHILDREN = 'amountOfChildren',
  EMAIL = 'email',
  COMMENT = 'comment',
  DATE_OF_BIRTH = 'dateOfBirth'
}

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss']
})
export class CreateCvComponent extends RxUnsubscribe implements OnInit {
  readonly CONTROLS = Controls;

  createCvForm: FormGroup = this.fb.group({
    [Controls.FIRST_NAME]: ['', [Validators.required, Validators.pattern(CYRILLIC_PATTERN)]],
    [Controls.GENDER]: ['', [Validators.required]],
    [Controls.MATERIAL_STATUS]: [''],
    [Controls.AMOUNT_OF_CHILDREN]: [''],
    [Controls.EMAIL]: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    [Controls.COMMENT]: ['', [Validators.pattern(CYRILLIC_PATTERN)]],
    [Controls.DATE_OF_BIRTH]: ['', [Validators.required]],
  });
  private formSubmitted = false;
  public disableSubmit = false;
  private readonly disableSubmitTime = 1000 * 3;
  public submitAttempts = 0;
  public maxSubmitAttempts = 3;

  get isAdult(): boolean {
    const age: number = new Date().getFullYear() - new Date(this.getControl(Controls.DATE_OF_BIRTH).value).getFullYear();
    return this.getControl(Controls.DATE_OF_BIRTH).value && age > 18;
  }

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getControl(Controls.DATE_OF_BIRTH).valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((val) => {
        if (this.isAdult) {
          this.getControl(Controls.MATERIAL_STATUS).setValidators([Validators.required]);
        } else {
          this.getControl(Controls.MATERIAL_STATUS).setValidators([]);
          this.getControl(Controls.MATERIAL_STATUS).setValue('');
        }
      });
  }

  getControl(name: Controls): AbstractControl | null {
    return this.createCvForm.get(name);
  }

  hasError(name: Controls): boolean {
    return this.getControl(name).invalid && this.formSubmitted;
  }

  getErrorMessage(name: Controls): string {
    if (this.getControl(name).hasError('required')) {
      return 'Обязательное поле';
    } else if (this.getControl(name).hasError('email')) {
      return 'Неверный email';
    } else if (this.getControl(name).hasError('pattern')) {
      if (name === Controls.EMAIL) {
        return 'Неверный email';
      }
      return 'Можно вводить только на русском языке';
    }
    return '';
  }

  onModelChange(value: string | number | Date, controlName: Controls): void {
    this.getControl(controlName).setValue(value);
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.createCvForm.valid) {
      this.submitAttempts = 0;
      this.userService.saveUser(new User(this.createCvForm.value));
      this.router.navigate(['cv']);
    } else {
      this.disableSubmit = true;
      if (this.submitAttempts < 2) {
        this.submitAttempts++;
      } else {
        this.createCvForm.reset();
        this.submitAttempts = 0;
        this.formSubmitted = false;
      }
      setTimeout(() => {
        this.disableSubmit = false;
      }, this.disableSubmitTime);
    }
    console.log('form =>', this.createCvForm);
  }
}
