// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatCardModule,
    MatFormFieldModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,MatInputModule,CommonModule,
  ],
  providers: [UserService],
  bootstrap: [UserComponent]
})
export class UserModule { }
