import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiliserComponent } from './initiliser/initiliser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: InitiliserComponent }],
  },
];
@NgModule({
  declarations: [InitiliserComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class FormbuilderModule {}
