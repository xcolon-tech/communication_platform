import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiGetUrl = 'https://api.example.com/settings';
  private apiUpdateUrl = 'https://api.example.com/settings';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<any> {
    return this.http.get(this.apiGetUrl);
    // const mockSettings: Settings = {
    //   defaultLanguage: 'EN',
    //   aiServices: {
    //     intelligentConversations: true,
    //     adaptiveRecommendations: true,
    //     securityEnhancement: true,
    //     smartAssistance: true,
    //     sentimentAnalysis: true
    //   },
    //   others: {
    //     multiLingualSupport: true,
    //     securityCompliance: true
    //   }
    // };
    // return of(mockSettings);
  }

  updateSettings(settings: Settings): Observable<any> {
    return this.http.put(this.apiUpdateUrl, settings);
    // Mocking a settings update, replace with actual HTTP call
    // return of({ success: true });
  }
}
