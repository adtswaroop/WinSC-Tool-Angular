import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
