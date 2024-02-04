// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
    providers:[UserService]
})
export class UserComponent implements OnInit {
  users: any[] = [];
  username: any;
  password: any;
  loginformation:any = null;
  url = '';
  
  constructor(private userService: UserService,private router: Router,private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    // this.loadUsers();
   console.log(this.router.url);
   this.url = this.router.url;

  }

  login() {

    localStorage.setItem("path","/");
    console.log(this.router.url);
    if (this.username === "123" && this.password === "admin") {
      try{
        console.log("login successful");
        localStorage.setItem("username", this.username);
        console.log(localStorage.getItem("username"));
         this.userService.getuserById(this.username).subscribe((data) => {
          this.loginformation=data;
          localStorage.setItem("loginfo", this.loginformation);
          console.log(this.loginformation);
          this.router.navigate(["/main"]);
    
        }
        )
      }
      catch(err){
        this.openSnackBar('API NOT working','error');
      }
      
    
     
    }
    else{
      this.openSnackBar('Invalid credentials','error');
    }
  }


  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  addUser(user: any): void {
    this.userService.addUser(user).subscribe(() => {
      this.loadUsers();
    });
  }

  updateUser(userId: string, user: any): void {
    this.userService.updateUser(userId, user).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }
}
