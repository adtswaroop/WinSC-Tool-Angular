import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DummyData } from './../../classes/dummy-data';
import { ProjectService } from './../../services/project/project.service';
import { Subscription } from 'rxjs';
import { Project } from './../../classes/project';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Join {{projectName}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" ngbAutofocus>
      <p>Project admin has been notified for reviewing join request</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() projectName;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  private joinedProjectSub: Subscription;
  private otherProjectSub: Subscription;

  otherProjectList: Project[];
  joinedProjectList: Project[];
   proj1 = '';
  // proj2 = '';

  constructor(private projectService: ProjectService, private modalService: Ng) {
    // initialize service to retrieve project data

    // initialize project name and project description
    this.joinedProjectSub = this.projectService.joinedProjectList.subscribe(data => {
      this.joinedProjectList = data;
    });
    this.otherProjectSub = this.projectService.otherProjectList.subscribe((data => {
      this.otherProjectList = data;
    }));
    // dynamically added div based on projects retrieved.

    this.proj1 = this.joinedProjectList[0].name;
    // this.proj2 = 'ProjectY';
   }

   openModal() {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.projectName = this.proj1;
   }

  ngOnInit() {

  }

  joinProject(projectId) {
    const joinobs = this.projectService.joinProject(projectId);
    joinobs.subscribe((data) => {
      console.log(data);
      this.projectService.getAllProjects();
    });
  }

  ngOnDestroy(): void {
    this.joinedProjectSub.unsubscribe();
    this.otherProjectSub.unsubscribe();
  }
}
