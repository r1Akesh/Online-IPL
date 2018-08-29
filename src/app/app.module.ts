import { AppService } from './service/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route,Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

/**
 * Routes Below
 */

 const path:Routes = [
    { path:'dashboard',component:AppDashboardComponent },
    { path:'', redirectTo:'dashboard', pathMatch:'full' }
 ]

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(path)
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
