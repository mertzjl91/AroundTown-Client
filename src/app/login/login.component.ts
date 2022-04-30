import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  pwhash = '';
  user: User;
  

  constructor(private router: Router,
    private loginservice: AuthenticationService, private userService: UserService) {
      this.user = new User();
      
     }

  ngOnInit() {
    }
    loginFailSuccess(results: any) {
      console.log(results)
      if(results.status === "success") {
        sessionStorage.setItem("username", this.user.username);
        this.userService.findIdByUsername(this.user.username).subscribe((idResult) => 
          sessionStorage.setItem('id', idResult.toString()));

        this.router.navigate([`userprofile/${this.user.username}`]);
      } else {
        console.log("failure")
      }
    }

    checkLogin() {
      this.loginservice.authenticate(this.user).subscribe((result)=> {
            this.loginFailSuccess(result);
          },
          error => {
            console.log("Authentication Error");
        })
    }
}