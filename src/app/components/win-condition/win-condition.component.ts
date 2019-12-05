import { Voters } from './../../classes/voters';
import { Comment } from './../../classes/comment';
import { WinCondition } from './../../classes/win-condition';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WinconditionService } from 'src/app/services/wincondition.service';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.css']
})
export class WinConditionComponent implements OnInit {
  @Input() winCondition: WinCondition;

  showWinCondition:boolean;
  showComments:boolean;
  isIssue:boolean;
  constructor(
    private winconditionService: WinconditionService, private customModal: ModalService
  ) {
    this.showComments = false;
    this.showWinCondition = true;
    this.isIssue = false;
  }

  ngOnInit() {
  }

  generateVoters(){
      const voters =  new Voters();
      voters.winConditionId = this.winCondition.id;
      voters.upvoters = this.winCondition.upvoters;
      voters.downvoters = this.winCondition.downvoters;
      return voters;
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  handleCommentAdd(event,box) {
    if (event.key === 'Enter' && box.value.length > 0) { // TODO: Proper value check
      const comment = new Comment([], [], 0, 'User', 1, 1, [], box.value, 0, false);
      this.winconditionService.createWinConditionComment(this.winCondition, comment);
      box.value = '';
    }
  }

  deleteWin() {
    this.customModal.openConfirmModal('Do you want to delete this win condition?', (answer: boolean) => {
      if (answer) {
        this.showWinCondition = false;
        return;
      }
      console.log('No');
    });
  }

  addHashToCategory(categoryStr: string) {
    return "#"+categoryStr;
  }
}
