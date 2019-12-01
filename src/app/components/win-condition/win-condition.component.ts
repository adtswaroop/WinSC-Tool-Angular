import { Voters } from './../../classes/voters';
import { Comment } from './../../classes/comment';
import { WinCondition } from './../../classes/win-condition';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WinconditionService } from 'src/app/services/wincondition.service';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.css']
})
export class WinConditionComponent implements OnInit {
  @Input() winCondition: WinCondition;

  showWinCondition:boolean;
  showComments:boolean;
  constructor(
    private winconditionService: WinconditionService
  ) {
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
      const comment = new Comment([], [], 0, 'Romi', 1, 1, [], box.value, 0, false)
      this.winconditionService.createWinConditionComment(this.winCondition.id, comment);
      box.value = '';
    }
  }

  deleteWin() {
    console.log("Deleting win condition id: "+this.winCondition.id);
    const promise = this.winconditionService.deleteWinCondition(this.winCondition);
    promise.then(()=>{
      this.showWinCondition = false;
    }, () => {
      console.log("Wincondition delete error");
    });
  }

  addHashToCategory(categoryStr: string) {
    return "#"+categoryStr;
  }

}
