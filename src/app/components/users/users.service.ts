import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private USERS_URL = environment.usersUrl;

  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<{users: User[]}>(`${this.USERS_URL}`);
  }
}
