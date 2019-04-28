import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../core/auth.service";
import { UserService } from "../../core/users/user.service";
import { User } from "../../shared/models/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  createUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastService: ToastrService,
    private router: Router
  ) { 
    this.createUser = new User();
  }

  ngOnInit() { }

  addUser(userForm: NgForm) {
    this.authService
      .createUserWithEmailAndPassword(userForm.value["emailId"], userForm.value["password"])
      .then((res) => {
        const user = {
          uid: res.user.uid,
          email: res.user.email
        };
        
        this.userService.createUser(user);
        this.toastService.success("등록중", "사용자 등록");
        this.router.navigate(["/"]); 
      })
      .catch((err) => {
        console.log(err);
        this.toastService.success("사용자 등록 실패", "에러발생"); 
      });
  }

  addGoogleUser() {
    this.authService
      .signInWithGoogle()
      .then((res) => {
        this.toastService.success("등록중", "사용자 등록");
        this.router.navigate(["/"]); 
      })
      .catch((err) => {
        this.toastService.error("에러발생");
      })
  }
}
