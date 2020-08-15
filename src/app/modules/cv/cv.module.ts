import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FioComponent } from './components/fio/fio.component';
import { CvComponent } from './pages/cv/cv.component';
import { CreateCvComponent } from './pages/create-cv/create-cv.component';

@NgModule({
  declarations: [FioComponent, CvComponent, CreateCvComponent],
  imports: [
    CommonModule
  ]
})
export class CvModule { }
