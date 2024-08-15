import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      mpin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const user = new User(
        "",
        this.loginForm.value.mobile,
        this.loginForm.value.mpin
      );
      this.loginService.login(user).subscribe(
        response => {
          console.log('Login successful', response);
        },
        error => {
          console.error('Login error', error);
        }
      );
    }
  }
}
