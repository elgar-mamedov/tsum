import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FioComponent } from './components/fio/fio.component';
import { CvComponent } from './pages/cv/cv.component';
import { CreateCvComponent } from './pages/create-cv/create-cv.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderComponent } from './components/gender/gender.component';

@NgModule({
  declarations: [FioComponent, CvComponent, CreateCvComponent, GenderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CvModule {}
