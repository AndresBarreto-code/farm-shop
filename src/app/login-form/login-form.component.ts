import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formLogin: FormGroup;
  error: Boolean;

  constructor(private router : Router, private data: DataService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submitLogin() {
    if (this.formLogin.value.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      this.data.validateLogin(this.formLogin.value.email, this.formLogin.value.password,
        (result) => {
          if (result === 'Ok') window.location.href = `${window.location.origin}/spa`;
          else this.error = true; 
        }
      );
    } else this.error = true;  
  }
}
