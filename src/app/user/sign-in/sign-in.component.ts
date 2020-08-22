import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TaskService} from '../../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginToken} from '../../Classes/login-token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  user: LoginToken;
  constructor(private userService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  OnSubmit(userName, password){
    this.user = new LoginToken();
    this.user.UserName = userName;
    this.user.PasswordHash = password;
    this.userService.Authentication(this.user).subscribe((data: any) => {
     localStorage.setItem('userToken', data);
     this.router.navigate(['/home']);
   },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }
}
