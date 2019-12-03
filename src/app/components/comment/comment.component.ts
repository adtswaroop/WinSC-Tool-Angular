import { Comment } from './../../classes/comment';
import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './../../services/modal.service';
// TODO: Handle long comments, limit text length
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  showComments:boolean;

  constructor(private customModal: ModalService) {
    this.showComments = true;
  }

  deleteComments() {
    this.customModal.openConfirmModal('Do you want to delete this comment?', (answer: boolean) => {
      if (answer) {
        this.showComments = false;
        return;
      }
      console.log('No');
    });
  }

  ngOnInit() {
  }

}
