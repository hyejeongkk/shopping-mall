import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LoginComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
