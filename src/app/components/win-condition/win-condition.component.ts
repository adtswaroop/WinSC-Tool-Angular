import { Voters } from './../../classes/voters';
import { Comment } from './../../classes/comment';
import { WinCondition } from './../../classes/win-condition';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.css']
})
export class WinConditionComponent implements OnInit {
  @Input() winCondition: WinCondition;

  showWinCondition:boolean;
  showComments:boolean;
  constructor() {
    this.showComments = false;
    this.showWinCondition = true;
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
      this.winCondition.comments.push(new Comment([], [], 0, 'Romi', 1, 1, [], box.value, 0, false));
      box.value = '';
    }
  }

  deleteWin() {
    this.showWinCondition = false;
  }

}
