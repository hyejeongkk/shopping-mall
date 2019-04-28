import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { IndexRoutes } from './index-routing';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, NavbarComponent, FooterComponent, SignUpComponent],
  imports: [
    CommonModule, CoreModule, SharedModule, RouterModule.forChild(IndexRoutes)
  ],
  exports: [ NavbarComponent, FooterComponent ]
})
export class IndexModule { }
