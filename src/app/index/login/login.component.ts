import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {
		emailId: "",
		loginPassword: ""
  };
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginWithEmail(userForm: NgForm) {
    this.authService
      .signInWithEmail(userForm.value["emailId"], userForm.value["loginPassword"])
      .then((res) => {
        this.router.navigate(["/"]);        
      })
      .catch((err) => {

      })
  }

}
