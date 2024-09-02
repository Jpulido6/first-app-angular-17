import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { User } from '../models/user';
import { NewUserComponent } from "./new-user.component";
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NewUserComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    HttpClient
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  showModal: boolean = false;
  filterUser: string = '';
  
  constructor(
    private userService: UserService,    
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  closeModal() {
    this.showModal = false;
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  cargarUsuarios(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    });
  }

  onCLick(user: User) {
    if (!user) {
      alert('User not found');
    }
    this.userService.deleteUser(user).subscribe(user => {
      alert('User deleted successfully');
    });

    this.cargarUsuarios();
  } 
  filterUsers(event: any): void {
    if(!event.target.value) {
      console.log('vacio');
    }
    console.log(event.target.value!);
  }

}
