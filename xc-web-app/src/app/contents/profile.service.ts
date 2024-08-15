import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiGetUrl = 'https://api.example.com/profile';
  private apiUpdateUrl = 'https://api.example.com/profile';
  private apiDeleteUrl = 'https://api.example.com/profile';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(this.apiGetUrl);
    // const mockProfile: Profile = {
    //   name: 'User Name',
    //   aboutMe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    //   mobile: '1234567890',
    //   mpin: '',
    //   newPassword: '',
    //   confirmPassword: '',
    //   onlineStatus: true
    // };
    // return of(mockProfile);
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.http.put(this.apiUpdateUrl, profile);
  }

  deleteAccount(): Observable<any> {
    return this.http.delete(this.apiDeleteUrl);
  }
}
