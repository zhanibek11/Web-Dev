import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userService = inject(UserService);
  users: User[] = this.userService.getUsers();
  selectedUser: User | null = null;

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
