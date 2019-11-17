import { Comment } from './comment';
import { Category } from './category'
import { User } from './user';

export class WinCondition {
    public id: number;
    public projectId: number;
    public user: User;
    public text: string;
    public businessValue: number;
    public relativePenalty: number;
    public easeRealization: number;
    public prioritizationScore: number;
    public upvoters: Array<User>;
    public downvoters: Array<User>;
    public categories: Array<Category>;
    public comments: Array<Comment>;

  constructor(json) {
    Object.assign(this,json);
  }





}
