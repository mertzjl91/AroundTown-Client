import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { UserProfileService } from '../service/user-profile.service';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  faHandPeace = faHandPeace;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private userProfileService: UserProfileService) { 

    }

  ngOnInit():void {
    this.currentUser = new User;
    this.getUser(this.route.snapshot.params.username);
    
  }

  public getUser(username: String): void {
    this.userService.findUserByUsername(username)
    .subscribe(data => this.currentUser = data);
  }

  deleteUser(id: number) {
    if(confirm(`Are you sure you want to delete this account?  This cannot be undone.`)) {
    this.userProfileService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    } 
  }

  //this is for future use in being able to access user profile differently
  // profileCreationLogin() {
  //   let user = sessionStorage.getItem('username')
  //   return user;
  //   console.log(user);
  // } 

}
