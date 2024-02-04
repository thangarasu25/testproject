// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/'; 
 
  public data  = "string";
  constructor(private http: HttpClient) {}

  getuserById(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}login/${userId}`);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}collection`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}collection`, user);
  }

  updateUser(userId: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}collection/${userId}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}collection/${userId}`);
  }
}
