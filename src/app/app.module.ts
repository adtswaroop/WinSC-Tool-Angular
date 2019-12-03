import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDividerModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
import { WinHolderPriorizationComponent } from './components/win-holder-priorization/win-holder-priorization.component';
import { WinConditionInputComponent } from './components/win-condition-input/win-condition-input.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceTesterComponent } from './components/test/service-tester/service-tester.component';
import { HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { appRoutingModule } from './app.routing';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { NgbdModalContent } from './components/project-list/project-list.component';
import { MatSnackBarModule } from '@angular/material';
import { SnackbarService } from './services/snackbar.service';
import { WinConditionFilterPipe } from './pipes/win-condition-filter.pipe';
import { WinConditionSortPipe } from './pipes/win-condition-sort.pipe';
import { ProjectFilterPipe } from './pipes/project-filter.pipe';
import { ModalComponent } from './components/modal/modal.component';

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
    WinConditionInputComponent,
    WinHolderPriorizationComponent,
    ProjectListComponent,
    ProfileComponent,
    LoginComponent,
    ServiceTesterComponent,
    RegisterComponent,
    AddProjectComponent,
    NgbdModalContent,
    WinConditionFilterPipe,
    WinConditionSortPipe,
    ProjectFilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    appRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SnackbarService],
  bootstrap: [AppComponent],
  entryComponents: [
    NgbdModalContent, ModalComponent
  ]
})
export class AppModule { }
