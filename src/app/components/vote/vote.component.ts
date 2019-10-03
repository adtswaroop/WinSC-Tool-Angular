import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Comment} from '../../classes/comment';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html', // TODO: expand width of the tooltip
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input()  comment: Comment;
  @Output() vote = new EventEmitter<number>();

  private  upVoters: Array<string>;
  private  downVoters: Array<string>;
  private  likeType: number;

  constructor() {

  }

  ngOnInit() {
    this.upVoters = this.comment.upVoters;
    this.downVoters = this.comment.downVoters;
    this.likeType = this.comment.likeType;
  }

  handleButton(i: number) {
    if (i === this.likeType) {
      this.likeType = 0;
    } else {
      this.likeType = i;
      this.vote.emit(i);
    }
}

  generateUpVoters() {
    let res: string;
    if (this.likeType === 1) {
      res  = 'You, ';
    } else {
      res = '';
    }
    return res + this.upVoters.join(', ') + ' upvoted';
  }

  generateDownVoters() {
    let res: string;
    if (this.likeType === -1) {
      res  = 'You, ';
    } else {
      res = '';
    }
    return res + this.downVoters.join(', ') + ' downvoted';
  }

  getScore() {
    return this.upVoters.length - this.downVoters.length + this.likeType;
  }

}
