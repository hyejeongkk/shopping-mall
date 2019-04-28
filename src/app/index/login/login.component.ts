import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/auth.service";
import { UserService } from "../../core/users/user.service";

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
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastService: ToastrService) { }

  ngOnInit() { }

  loginWithEmail(userForm: NgForm) {
    this.authService
      .signInWithEmail(userForm.value["emailId"], userForm.value["loginPassword"])
      .then((res) => {
        this.toastService.success("로그인성공", "잠시만 기다려주세요.");
        this.router.navigate(["/"]);        
      })
      .catch((err) => {
        this.toastService.error("로그인실패");
      })
  }

  loginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res) => {
        this.toastService.success("로그인성공", "잠시만 기다려주세요.");
        this.router.navigate(["/"]);
      })
      .catch((err) => {
        this.toastService.error("에러발생");
      })
  }
}
