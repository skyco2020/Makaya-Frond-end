import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {LoginToken} from '../../Classes/login-token';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
@Injectable()
export class SignUpComponent implements OnInit {
  user: LoginToken;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private userService: TaskService, private toastr: ToastrService
     ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null){
      form.reset();
    }
    this.user = {
      UserName: '',
      PasswordHash: '',
      Email: '',
      FirstName: '',
      LastName: ''
    };
  }
  OnSubmit(form: NgForm) {
    this
    const user = {
      UserName: form.value.UserName,
      PasswordHash: form.value.Password,
      Email: form.value.Email,
      FirstName: form.value.FirstName,
      LastName: form.value.LastName
    };
    // this.userService.Post(user, 'Users')
    //   .subscribe((data: any) => {
    //     if (data.Succeeded === true) {
    //       this.resetForm(form);
    //       this.toastr.success('User registration successful');
    //     }
    //     else{
    //       this.toastr.error(data.Errors[0]);
    //     }
    //   });
  }
}
