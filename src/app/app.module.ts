import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectTabComponent } from './components/project-tab/project-tab.component';
import { ProjectWinsComponent } from './components/project-wins/project-wins.component';
import { ProjectBenefitsComponent } from './components/project-benefits/project-benefits.component';
import { ProjectPriorizationComponent } from './components/project-priorization/project-priorization.component';
import { ProjectSettingsComponent } from './components/project-settings/project-settings.component';
import { ProjectComponent } from './components/project/project.component';
import { CategoryHolderComponent } from './components/category-holder/category-holder.component';
import { WinHolderComponent } from './components/win-holder/win-holder.component';
import { SortDropdownComponent } from './components/sort-dropdown/sort-dropdown.component';
import { WinInputComponent } from './components/win-input/win-input.component';
import { ProjectVisionComponent } from './components/project-vision/project-vision.component';
import { VoteComponent } from './components/vote/vote.component';
import { CommentComponent } from './components/comment/comment.component';
import { WinConditionComponent } from './components/win-condition/win-condition.component';
import { WinConditionPriorizationComponent } from './components/win-condition-priorization/win-condition-priorization.component';
import { WinConditionInputComponent } from './components/win-condition-input/win-condition-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    ProjectTabComponent,
    ProjectWinsComponent,
    ProjectBenefitsComponent,
    ProjectPriorizationComponent,
    ProjectSettingsComponent,
    ProjectComponent,
    CategoryHolderComponent,
    WinHolderComponent,
    SortDropdownComponent,
    WinInputComponent,
    ProjectVisionComponent,
    VoteComponent,
    CommentComponent,
    WinConditionComponent,
    WinConditionPriorizationComponent,
    WinConditionInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
