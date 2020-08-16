import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FioComponent } from './components/fio/fio.component';
import { CvComponent } from './pages/cv/cv.component';
import { CreateCvComponent } from './pages/create-cv/create-cv.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FioComponent, CvComponent, CreateCvComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CvModule {}
