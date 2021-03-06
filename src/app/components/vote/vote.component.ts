import { WinconditionService } from './../../services/wincondition.service';
import { User } from './../../classes/user';
import { Voters } from './../../classes/voters';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html', // TODO: expand width of the tooltip
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit, OnDestroy {
  @Input()  voters: Voters;

  private  upVoters: Array<User>;
  private  downVoters: Array<User>;
  private  userId: number;
  private winConditionId: number;
  private commentId: number;
  private likeType: number;
  private initialLikeType: number;
  private pSub: Subscription;

  constructor(private profileService: ProfileService, private winconditionService:WinconditionService) {
      this.pSub = this.profileService.userData.subscribe((user) => {
        if (user) {
          this.userId = user.id;
          this.parseLikeType();
        }
      });

  }

  ngOnInit() {
    this.upVoters = this.voters.upvoters;
    this.downVoters = this.voters.downvoters;
    this.winConditionId = this.voters.winConditionId;
    this.commentId = this.voters.commmentId;
    this.parseLikeType();
  }

  handleButton(i: number) {
    if (i === this.likeType) {
      this.likeType = 0;
      this.winconditionService.handleVote(this.winConditionId,this.commentId,this.likeType);
    } else {
      this.likeType = i;
      this.winconditionService.handleVote(this.winConditionId,this.commentId,this.likeType);
    }
}

parseLikeType() {
    this.likeType=0;
    this.initialLikeType = 0;
    if (!this.upVoters || !this.downVoters ) {
      return;
    }
    this.upVoters.forEach((user) => {
        if (user.id==this.userId){
          this.likeType=1;
          this.initialLikeType = 1;
        }
    });

    this.downVoters.forEach((user) => {
      if (user.id===this.userId) {
        this.likeType=-1;
        this.initialLikeType = -1;
      }
    });
}

  generateUpVoters() {
    let res: string;
    if (this.likeType === 1) {
      if (this.upVoters.length === 0){
        res = 'You ';
      } else {
        res  = 'You, ';
      }
    } else {
      res = '';
    }
    if (res === '' && this.upVoters.length === 0) {
      return 'Nobody upvoted';
    }
    return res + this.upVoters.map((user) => user.firstName + " " + user.lastName).join(', ') + ' upvoted';
  }

  generateDownVoters() {
    let res: string;
    if (this.likeType === -1) {
      if (this.downVoters.length === 0){
        res = 'You ';
      } else {
        res  = 'You, ';
      }
    } else {
      res = '';
    }
    if (res === '' && this.downVoters.length === 0) {
      return 'Nobody downvoted';
    }
    console.log(this.downVoters);
    return res + this.downVoters.map((user) => user.firstName + " " + user.lastName).join(', ') + ' downvoted';
  }

  getScore() {
    return this.upVoters.length - this.downVoters.length -this.initialLikeType + this.likeType;
  }

  ngOnDestroy(): void {
    this.pSub.unsubscribe();
  }

}
