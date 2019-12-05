import { Category } from './category';
import { User } from './user';

export class Comment {
  public upvoters: Array<User>;
  public downvoters: Array<User>;
  public likeType: number; // 1 user upvoted, 0 netural, -1 user downvoted
  public userName: string; // Full name of the user
  public userId: number;
  public user: User;
  public id: number;
  public categories: Array<Category>;
  public text: string;
  public timestamp: any;
  public isIssue: boolean; // True if it is a issue, False if it is a comment

  constructor($upVoters: Array<User>, $downVoters: Array<User>,
              $likeType: number, $userName: string, $userId: number,
              $commentId: number, $categories: Array<Category>,
              $text: string, $timestamp: any, $isIssue: boolean) {
    this.upvoters = $upVoters;
    this.downvoters = $downVoters;
    this.likeType = $likeType;
    this.userName = $userName;
    this.userId = $userId;
    this.id = $commentId;
    this.categories = $categories;
    this.text = $text;
    this.timestamp = $timestamp;
    this.isIssue = $isIssue;
  }
}
