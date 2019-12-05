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
    public easeOfRealization: number;
    public prioritizationScore: number;
    public upvoters: Array<User>;
    public downvoters: Array<User>;
    public categories: Array<Category>;
    public comments: Array<Comment>;
    public categoryIds: Array<number>;
    public createdAt: string;

  /*
  constructor(json) {
    Object.assign(this,json);
  }
  */

	constructor($id: number, $projectId: number, $user: User, $text: string, $businessValue: number, $relativePenalty: number, $easeRealization: number, $prioritizationScore: number, $upvoters: Array<User>, $downvoters: Array<User>, $categories: Array<Category>, $comments: Array<Comment>) {
		this.id = $id;
		this.projectId = $projectId;
		this.user = $user;
		this.text = $text;
		this.businessValue = $businessValue;
		this.relativePenalty = $relativePenalty;
		this.easeOfRealization = $easeRealization;
		this.prioritizationScore = $prioritizationScore;
		this.upvoters = $upvoters;
		this.downvoters = $downvoters;
		this.categories = $categories;
		this.comments = $comments;
	}
}
