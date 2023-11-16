import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/Login/Login.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { HomeComponent } from './home/home.component';
import { ComptableGuard } from './Guard/comptable.guard';
import { OperateurGuard } from './Guard/operateur.guard';
import { FactureComponent } from './Facture/Facture.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'Facture',
    component: FactureComponent,
    pathMatch: 'full',
    canActivate: [OperateurGuard],
  },
  {
    path: 'Auth',
    loadChildren: () => import('./Auth/Auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
