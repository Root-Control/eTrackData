import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PublicComponent } from './public.component';
import { Routes, RouterModule } from '@angular/router';

export const publicRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];