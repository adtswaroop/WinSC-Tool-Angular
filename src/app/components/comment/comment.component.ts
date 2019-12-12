import { Comment } from './../../classes/comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from './../../services/modal.service';
import { Voters } from 'src/app/classes/voters';
import { WinconditionService } from 'src/app/services/wincondition.service';

// TODO: Handle long comments, limit text length
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() commentDeleted = new EventEmitter<number>();
  showComments:boolean;

  constructor(private customModal: ModalService, private winConditionService: WinconditionService) {
    this.showComments = true;
  }

  deleteComments() {
    this.customModal.openConfirmModal('Do you want to delete this comment?', (answer: boolean) => {
      if (answer) {
        const promise = this.winConditionService.deleteWinConditionComment(this.comment);
        promise.then(() => {this.commentDeleted.emit(this.comment.id); });
      }
    });
  }

  ngOnInit() {
  }

  generateVoters(comment: Comment) {
      const voters = new Voters();
      voters.commmentId = comment.id;
      voters.upvoters = comment.upvoters;
      voters.downvoters = comment.downvoters;
      return voters;
  }

}
