import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent  implements OnInit {

  settingsForm!: FormGroup;
  settings: any;

  constructor(private fb: FormBuilder, private settingsService: SettingsService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.settingsForm.patchValue(settings);
    });
  }

  initializeForm(): void {
    this.settingsForm = this.fb.group({
      defaultLanguage: ['', Validators.required],
      aiServices: this.fb.group({
        intelligentConversations: [false],
        adaptiveRecommendations: [false],
        securityEnhancement: [false],
        smartAssistance: [false],
        sentimentAnalysis: [false]
      }),
      others: this.fb.group({
        multiLingualSupport: [false],
        securityCompliance: [false]
      })
    });
  }

  onSaveSettings(): void {
    if (this.settingsForm.valid) {
      const updatedSettings = this.settingsForm.value;
      this.settingsService.updateSettings(updatedSettings).subscribe(response => {
        console.log('Settings updated successfully!');
      });
    }
  }

  onLogout(): void {
    this.router.navigate(['/logout']);
  }
}
