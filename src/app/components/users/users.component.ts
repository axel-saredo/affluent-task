import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  
  isLoading: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getUsers();
  }

  getUsers() {
    this.usersService.fetchUsers().subscribe((response) => {
      this.isLoading = false;
      this.users = response.users;
    });
  }
}
