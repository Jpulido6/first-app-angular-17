import { Component, Input } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [    
    FormsModule
  ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  @Input() showModal!: boolean
  @Input() toggleModal!: () => void
  @Input() cargarUsuarios!: () => void

  constructor(
    private userService: UserService,
  ) { }

  closeModal() {
    this.toggleModal();
  }

  onSubmit(f: NgForm) {   

    const user: User = {
      name: f.value.name,
      email: f.value.email,
      dni: f.value.dni,
      lastName: f.value.lastName,
      city: f.value.city,
      country: f.value.country
    }   

    this.userService.createUser(user).subscribe({
      next: (data) => {
        alert('User created successfully');
        this.cargarUsuarios();
        this.closeModal();
      },
      error: (e) =>{ 
        alert(e.error.message), 
        console.error(e) 
      }
    });


  }  

}
