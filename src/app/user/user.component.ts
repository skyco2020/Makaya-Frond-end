import { Component, OnInit } from '@angular/core';
import { SkycoService } from '../services/skyco.service';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SkycoUser } from '../Classes/skyco-user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalFunctionService } from '../Function/global-function.service';

declare var $: any;
const urljs = '../../assets/js/user.js';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  user: SkycoUser;  
  browserForm: FormGroup;
  private isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  Movies:any;

  constructor(
    private userService: SkycoService, private fb:FormBuilder,
    private taskser: TaskService,private router: Router, private gbfuncservice: GlobalFunctionService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    localStorage.removeItem('mail');
    this.taskser.doLogoutUser();
    this.gbfuncservice.loadScript(urljs);
    this.GetMovies();
  }
  private initForm():void{
    this.browserForm = this.fb.group({
      UserName: ['',[Validators.required,Validators.pattern(this.isEmail)]]
    });
  }
  isValidField(field: string): string{
    const validatedField = this.browserForm.get(field);
    return(!validatedField.valid && validatedField.touched) ?
      'is-invalid': validatedField.touched ? 'is-valid':'';
  }

  GetMovies() {
    this.userService.GetMovie().subscribe((data: any) => {
      this.Movies = data;
    });
  }

  OnSubmit() {
    if(this.browserForm.valid) {
      this.user = new SkycoUser();
      this.user.CreatedBy = this.browserForm.value.userName;
      this.user.EmailAddress = this.browserForm.value.userName;
      this.user.CreatedBy = 'Automatic';
      this.user.CreatedAt = new Date();
      this.user.Voided = 1;

      this.userService.Post(this.user).subscribe(
        (data: any) => {
          if (data.message === "sucees") {
            localStorage.setItem('IdUser', data.UserId);
            localStorage.setItem('mail', this.browserForm.value.userName);
            this.router.navigate(['/registerpayment']);
          }
          else if (data.message === "Welcome to Makaya"){
            localStorage.setItem('IdUser', data.UserId);
            localStorage.setItem('mail', this.browserForm.value.userName);
            localStorage.setItem('back', 'Welcome to Sky co');
            this.router.navigate(['/registerpayment']);
          }
          else if(data.message === "Welcome Back at Makaya" || data.message ==='There is already an account with this email'){
            localStorage.setItem('back', data.message);
            localStorage.setItem('IdUser', data.UserId);
            localStorage.setItem('mail', this.browserForm.value.userName);
            this.router.navigate(['/account']);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error.ErrorDescription === 'Welcome to Sky co') {
            
          } 
        }
      );
    }
  }
}
