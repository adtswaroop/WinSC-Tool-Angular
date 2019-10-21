import { Comment } from './comment';
import { Category } from './category'

export class WinCondition {
    public upVoters: Array<string>;
    public downVoters: Array<string>;
    public likeType: number;
    public userName: string;
    public userId: number;
    public winConditionId: number;
    public categories: Array<Category>;
    public text: string;
    public comments: Array<Comment>;
    public businessValue: number;
    public relativePenalty: number;
    public easeRealization: number;


    constructor($upVoters: Array<string>, $downVoters: Array<string>,
                $likeType: number, $userName: string, $userId: number,
                $winConditionId: number, $categories: Array<Category>,
                $text: string, $comments: Array<Comment>) {
    this.upVoters = $upVoters;
    this.downVoters = $downVoters;
    this.likeType = $likeType;
    this.userName = $userName;
    this.userId = $userId;
    this.winConditionId = $winConditionId;
    this.categories = $categories;
    this.text = $text;
    this.comments = $comments;
    this.businessValue = 3;
    this.relativePenalty = 2;
    this.easeRealization = 5;
  }


}
