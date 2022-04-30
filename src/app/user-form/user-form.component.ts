import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isNull } from 'util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  emailAvailable: boolean = true;
  usernameAvailable: boolean = true;  
  users: User[] = [];
  currentUserId: number;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,) {
    this.user = new User();
    this.users = [];
   }

   goToProfile() {
    this.router.navigate([`/userprofile/${this.user.username}`]);
    ///userprofile/username - this only works when unique username validation is in play.
    //can pull info from username if they are unique. It will be saved in the this.user.username vs id.
  }

   onSubmit(password: String, confirmPassword: String) {
      if(password === confirmPassword) {
        sessionStorage.setItem('username', this.user.username);
        this.userService.save(this.user).subscribe((result) => {
          this.userService.findIdByUsername(this.user.username).subscribe((idResult) => {
            console.log(idResult);
            sessionStorage.setItem('id', idResult.toString());
          })
          this.goToProfile()});
        
      }
   }

  confirmEmail(email: String) {
      if(email != '') {
        this.userService.sendEmail(email).subscribe(result => this.emailAvailable = result);
      }
  }

  confirmUsername(username: String) {
    if(username != '') {
      this.userService.sendUsername(username).subscribe(result => this.usernameAvailable = result);
    }
  }
   
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;})
  }

}
