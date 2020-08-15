import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './modules/cv/pages/cv/cv.component';
import { CreateCvComponent } from './modules/cv/pages/create-cv/create-cv.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'cv', component: CvComponent},
  {path: 'create', component: CreateCvComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
