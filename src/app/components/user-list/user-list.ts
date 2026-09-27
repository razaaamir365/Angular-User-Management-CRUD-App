import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { users } from '../../services/user-data-type';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  userData = signal<users[] | undefined>(undefined);
  constructor(private userService: UserService, private router:Router) {}

  getUser() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.userData.set(data);
    });
  }

  ngOnInit() {
    this.getUser();
  }

  deleteUser(id: number | undefined) {
    if (id) {
      this.userService.deleteUser(id).subscribe((resp) => {
        if (resp) {
          this.getUser();
        }
      });
    }
  }

  editUser(id: number | undefined) {
    this.router.navigate([`edit/${id}`])
    // console.log(id);
    
  }


}
