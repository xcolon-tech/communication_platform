import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user: User = new User('','', '');

  constructor(private registrationService: RegistrationService) {}

  register() {
    this.registrationService.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
