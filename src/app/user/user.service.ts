import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);    
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user);
  }
  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.url}/users/${user.id}`);
  }
}
