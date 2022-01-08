import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  // when I tried this I got the correct id and user logged to the console a few times
  // users: User[];
  users: User[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService) {
    this.user = new User();
    this.users = [];
   }

   goToProfile() {
    this.userService.findAll().subscribe(data => {
      this.users = data;});
    this.router.navigate([`/userprofile/${this.users[this.users.length-1].id}`]);
    ///userprofile/username - this only works when unique username validation is in play.
    //can pull info from username if they are unique. It will be saved in the this.user.username vs id.
  }
   onSubmit(password: String, confirmPassword: String) {
     //add password confirmation validation here in an if statement
    if(password === confirmPassword) {
    
      this.userService.save(this.user).subscribe((result) => this.goToProfile());
     
    }
  
  
   }

   
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;})
  }


}
