import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user/user.service';

import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-main',
  standalone: true,
imports: [
  CommonModule,
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
  ReactiveFormsModule,MatInputModule,CommonModule ,MatTableModule,MatDividerModule,MatIconModule
],
providers: [UserService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})



export class MainComponent  implements OnInit {
[x: string]: any;
  dataSource:any = null;
  username:any ="aasdf" ;
  Role:any ="sad";
  displayedColumns: string[] = ['position', 'name', 'role', 'symbol'];


  constructor(private api: UserService,private _snackBar: MatSnackBar,) {

  }


  save()
  {
    this.Role = this.Role;
    this.username = this.username;
    console.log( this.Role+
    this.username);
    let data ={
      "id": Math.random().toString(36).substr(2, 9),
      "name": this.username,
      "role": this.Role,
      "symbol": this.username
    }
    console.log(data);
    this.api.addUser(data).subscribe((data)=>{
      console.log(data);
     this.Fetchinfo();
      console.log("sucess");
    })
    console.log("tesat");
  }
  
  ngOnInit(): void {
    this.Fetchinfo();
  }
  Fetchinfo(){
    this.api.getUsers().subscribe((data)=>{
      this.dataSource= data;
    })
  }

  // dataSource = ELEMENT_DATA;

update(data:any){
  console.log(data);
  this.api.updateUser(data.id,data).subscribe((data)=>{
    
  })
}

deletedata(el:any)
  {
    console.log('asdf');
   console.log(el);
   this.api.deleteUser(el.id).subscribe((data)=>{
    this.dataSource= data;
    this.openSnackBar('Deleted successfully','success');
    this.Fetchinfo();
  })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
