import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment'; 
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthService } from "./auth.service";
import { RouterModule, Router } from "@angular/router";
import { LoginFormComponent } from './users/login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule
  ],
  providers: [AuthService],
  exports: [
    AngularFireModule,
		AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule
  ]
})
export class CoreModule { }

