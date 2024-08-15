import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private apiUrl = 'https://api.example.com/logout'; // Update with your actual API endpoint

  constructor(private http: HttpClient, private router: Router) {}

  logout(): Observable<any> {
    return this.http.post(this.apiUrl, {}).pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
