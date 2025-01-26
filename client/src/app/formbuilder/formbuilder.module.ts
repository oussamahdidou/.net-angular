import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiliserComponent } from './initiliser/initiliser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputmodalComponent } from './inputmodal/inputmodal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: InitiliserComponent }],
  },
];
@NgModule({
  declarations: [InitiliserComponent, InputmodalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule.forChild(routes),
  ],
})
export class FormbuilderModule {}
