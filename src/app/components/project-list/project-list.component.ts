import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from './../../services/project/project.service';
import { Subscription } from 'rxjs';
import { Project } from './../../classes/project';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './../../services/modal.service';

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
      <p>You have successfully joined to the project.</p>
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
  searchWord: string;

  constructor(private projectService: ProjectService, private modalService: NgbModal, private customModal: ModalService) {
    // initialize service to retrieve project data

    // initialize project name and project description
    this.joinedProjectSub = this.projectService.joinedProjectList.subscribe(data => {
      this.joinedProjectList = data;
    });
    this.otherProjectSub = this.projectService.otherProjectList.subscribe((data => {
      this.otherProjectList = data;
    }));
    // dynamically added div based on projects retrieved.
    // this.proj2 = 'ProjectY';
   }

   openModal(i) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.projectName = this.otherProjectList[i].name;
   }

   openConfirmModal() {
    this.customModal.openConfirmModal('Sample Modal', (answer: boolean) => {
      if (answer) {
        console.log('Yes');
        return;
      }
      console.log('No');
    });
  }

  ngOnInit() {
  }

  joinProject(projectId, i) {
    const joinobs = this.projectService.joinProject(projectId);
    joinobs.subscribe((data) => {
      this.projectService.getAllProjects();
      this.openModal(i);
    });
  }

  ngOnDestroy(): void {
    this.joinedProjectSub.unsubscribe();
    this.otherProjectSub.unsubscribe();
  }
}
