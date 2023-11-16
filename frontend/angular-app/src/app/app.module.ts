import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { AuthModule } from './Auth/Auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FactureComponent } from './Facture/Facture.component';
import { OperationComponent } from './Operation/Operation.component';
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [		
    AppComponent,
    NotFoundComponent,
    NotFoundComponent,
    HomeComponent,
      FactureComponent,
      OperationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    /* JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: [],
        //disallowedRoutesRoutes: [],
      },
    }),*/
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
