import { Category } from './category';

export class Comment {
  public upVoters: Array<string>;
  public downVoters: Array<string>;
  public likeType: number; // 1 user upvoted, 0 netural, -1 user downvoted
  public userName: string; // Full name of the user
  public userId: number;
  public commentId: number;
  public categories: Array<Category>;
  public text: string;
  public timestamp: any;
  public isIssue: boolean; // True if it is a issue, False if it is a comment

  constructor($upVoters: Array<string>, $downVoters: Array<string>,
              $likeType: number, $userName: string, $userId: number,
              $commentId: number, $categories: Array<Category>,
              $text: string, $timestamp: any, $isIssue: boolean) {
    this.upVoters = $upVoters;
    this.downVoters = $downVoters;
    this.likeType = $likeType;
    this.userName = $userName;
    this.userId = $userId;
    this.commentId = $commentId;
    this.categories = $categories;
    this.text = $text;
    this.timestamp = $timestamp;
    this.isIssue = $isIssue;
  }
}
