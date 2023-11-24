import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Dashboard.component';
import { AddComptableComponent } from './Add-Comptable/Add-Comptable.component';
import { AddOperatorComponent } from './Add-Operator/Add-Operator.component';
import { HRBoardComponent } from './HRBoard/HRBoard.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'Add-Comptable', component: AddComptableComponent },
      { path: 'Add-Operator', component: AddOperatorComponent },
      { path: 'HRBoard', component: HRBoardComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    AddComptableComponent,
    AddOperatorComponent,
    HRBoardComponent,
  ],
})
export class DashboardModule {}
