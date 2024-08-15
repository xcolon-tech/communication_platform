import { Routes } from '@angular/router';
import { RegistrationComponent } from './register/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './contents/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ChatComponent } from './contents/chat/chat.component';
import { ProfileComponent } from './contents/profile/profile.component';
import { SettingsComponent } from './contents/settings/settings.component';

export const routes: Routes = [
    { path: 'app',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'register', component: RegistrationComponent, },
            { path: 'login', component: LoginComponent, },
            { path: 'logout', component: LogoutComponent, },
            { path: 'chat', component: ChatComponent, },
            { path: 'profile', component: ProfileComponent, },
            { path: 'settings', component: SettingsComponent, },
        ],
    },
    { path: '**', redirectTo: 'app' },
];
