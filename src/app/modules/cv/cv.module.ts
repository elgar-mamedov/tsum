import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FioComponent } from './components/fio/fio.component';
import { CvComponent } from './pages/cv/cv.component';
import { CreateCvComponent } from './pages/create-cv/create-cv.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderComponent } from './components/gender/gender.component';
import { DateOfBirthComponent } from './components/date-of-birth/date-of-birth.component';
import { MaritalStatusComponent } from './components/marital-status/marital-status.component';
import { AmountOfChildrenComponent } from './components/amount-of-children/amount-of-children.component';
import { EmailComponent } from './components/email/email.component';
import { CommentComponent } from './components/comment/comment.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FioComponent, CvComponent, CreateCvComponent, GenderComponent, DateOfBirthComponent, MaritalStatusComponent, AmountOfChildrenComponent, EmailComponent, CommentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class CvModule {}
