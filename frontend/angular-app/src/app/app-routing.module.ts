import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/Login/Login.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { HomeComponent } from './home/home.component';
import { ComptableGuard } from './Guard/comptable.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [ComptableGuard],
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
