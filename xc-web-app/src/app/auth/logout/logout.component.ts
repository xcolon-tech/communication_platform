import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: LogoutService) {}

  ngOnInit(): void {
    this.logoutService.logout().subscribe(() => {
      console.log('User logged out successfully.');
    });
  }
}
