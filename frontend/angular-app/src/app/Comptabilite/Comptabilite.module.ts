import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptabiliteComponent } from './Comptabilite.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BigLivreComponent } from './BigLivre/BigLivre.component';
import { LivreJournalComponent } from './LivreJournal/LivreJournal.component';
import { ComptabiliteDetailComponent } from './ComptabiliteDetail/ComptabiliteDetail.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'BigLivre', component: BigLivreComponent },
      { path: 'LivreJournal', component: LivreJournalComponent },
      { path: '', component: ComptabiliteComponent },
      { path: ':id', component: ComptabiliteDetailComponent },
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
  declarations: [ComptabiliteComponent],
})
export class ComptabiliteModule {}
