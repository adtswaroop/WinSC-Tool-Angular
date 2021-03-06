import { ProjectGuard } from './helpers/project.guard';
import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children:[
    {
      path: 'project-list',
      component: ProjectListComponent
    },
    {
      path: 'project/:id',
      component: ProjectComponent,
      canActivate: [ProjectGuard]
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'add-project',
      component: AddProjectComponent
    },
    {
      path: '',
      redirectTo: '/project-list',
      pathMatch: 'full'
    }
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
