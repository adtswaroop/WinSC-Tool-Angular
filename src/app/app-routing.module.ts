import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

const routes: Routes = [
  {
    path: 'project-list',
    component: ProjectListComponent
  },
  {
    path: 'add-project',
    component: AddProjectComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: '/project-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/project-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
