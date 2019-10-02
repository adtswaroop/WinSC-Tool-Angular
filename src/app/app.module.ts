import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { NavigationComponentComponent } from './components/navigation-component/navigation-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectTabComponentComponent } from './components/project-tab-component/project-tab-component.component';
import { ProjectWinsComponentComponent } from './components/project-wins-component/project-wins-component.component';
import { ProjectBenefitsComponentComponent } from './components/project-benefits-component/project-benefits-component.component';
import { ProjectPriorizationComponentComponent } from './components/project-priorization-component/project-priorization-component.component';
import { ProjectSettingsComponentComponent } from './components/project-settings-component/project-settings-component.component';
import { ProjectComponentComponent } from './components/project-component/project-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    NavigationComponentComponent,
    ProjectTabComponentComponent,
    ProjectWinsComponentComponent,
    ProjectBenefitsComponentComponent,
    ProjectPriorizationComponentComponent,
    ProjectSettingsComponentComponent,
    ProjectComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
