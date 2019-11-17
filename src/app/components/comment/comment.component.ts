import { Comment } from './../../classes/comment';
import { Component, OnInit, Input } from '@angular/core';
// TODO: Handle long comments, limit text length
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor() {

  }

  ngOnInit() {
  }

}
