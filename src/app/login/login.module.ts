import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule
  ],  exports: [
    LayoutComponent, // Export LayoutComponent
  ]
})
export class LoginModule { }
