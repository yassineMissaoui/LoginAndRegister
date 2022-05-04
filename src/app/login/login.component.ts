import { Component, OnInit } from '@angular/core';
import { FormGroup ,  FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
  }

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  private initForm(){
    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.minLength(6)]]
    });
  }
   login (){

  }

  onSubmit(){

  }

}
