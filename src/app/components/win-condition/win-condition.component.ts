import { Comment } from './../../classes/comment';
import { DummyData } from './../../classes/dummy-data';
import { WinCondition } from './../../classes/win-condition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.css']
})
export class WinConditionComponent implements OnInit {
  @Input() winCondition: WinCondition;

  showComments:boolean;
  constructor() {
    this.showComments = false;
  }

  ngOnInit() {
  }

  wcToComment(){
    // TODO: Fix this bad design, vote should not use comment, it needs a new data structure likeType,upVoters,downVoters
      return new Comment(this.winCondition.upVoters,this.winCondition.downVoters,
                          this.winCondition.likeType,this.winCondition.userName,
                          this.winCondition.userId,this.winCondition.winConditionId,
                          this.winCondition.categories,"",5,false);
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

}
