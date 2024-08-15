import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  profile: any;

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
      this.profileForm.patchValue(profile);
    });
  }

  initializeForm(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      aboutMe: ['', Validators.required],
      mobile: ['', Validators.required],
      mpin: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      onlineStatus: [true]
    });
  }

  onSaveChanges(): void {
    if (this.profileForm.valid) {
      const updatedProfile = this.profileForm.value;
      this.profileService.updateProfile(updatedProfile).subscribe(response => {
        console.log('Profile updated successfully!');
      });
    }
  }

  onDeleteAccount(): void {
    this.profileService.deleteAccount().subscribe(response => {
      console.log('Account deleted successfully!');
    });
  }
}
