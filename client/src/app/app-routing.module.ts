import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'builder',
    loadChildren: () =>
      import('./formbuilder/formbuilder.module').then(
        (m) => m.FormbuilderModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./show/show.module').then((m) => m.ShowModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
