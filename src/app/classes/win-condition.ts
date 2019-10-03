import { Comment } from './comment';

export class WinCondition {
    public upVoters: Array<string>;
    public downVoters: Array<string>;
    public likeType: number;
    public userName: string;
    public userId: number;
    public winConditionId: number;
    public categories: Array<string>;
    public text: string;
    public comments: Array<Comment>;


    constructor($upVoters: Array<string>, $downVoters: Array<string>,
                $likeType: number, $userName: string, $userId: number,
                $winConditionId: number, $categories: Array<string>,
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
  }


}
