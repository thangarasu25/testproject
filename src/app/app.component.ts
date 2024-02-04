import { Component, forwardRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import{MatCardModule} from '@angular/material/card';
import{MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from './user/user.service';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/UserModule';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // forwardRef(() => UserModule),
    RouterOutlet,
    MatCardModule,
    MatFormFieldModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,MatInputModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  providers: [UserService],
  
})
export class AppComponent {
username: any;
password: any;

loginformation:any = null;
url:string ;

constructor(private api : UserService,private router: Router) {
  this.url = this.router.url;
}

login() {
  localStorage.setItem("path",this.router.url);
  console.log(this.router.url);
  if (this.username === "123" && this.password === "admin") {
    console.log("login successful");
    localStorage.setItem("username", this.username);
    console.log(localStorage.getItem("username"));
     this.api.getuserById(this.username).subscribe((data) => {
      this.loginformation=data;
      localStorage.setItem("loginfo", this.loginformation);
      console.log(this.loginformation);
      this.router.navigate(["user"]);

    });
  }
}
}