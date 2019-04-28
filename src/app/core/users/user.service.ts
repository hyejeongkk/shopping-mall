import { Injectable } from '@angular/core';
import { User } from "../../shared/models/user";
import { AngularFireDatabase, AngularFireList }  from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) { this.getUsers(); }

  createUser(data: any) {
    //data.isAdmin = false;
    //this.users.push(data);
  }

  getUsers() {
     
  }
}
