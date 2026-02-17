import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Алия Сейткали', city: 'Алматы', isActive: true },
    { id: 2, name: 'Данияр Абенов', city: 'Астана', isActive: false },
    { id: 3, name: 'Айгерим Нурова', city: 'Шымкент', isActive: true },
    { id: 4, name: 'Бекзат Омаров', city: 'Алматы', isActive: true },
    { id: 5, name: 'Жансая Қасым', city: 'Астана', isActive: false },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}
