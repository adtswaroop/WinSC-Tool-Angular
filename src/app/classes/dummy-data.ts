import { Comment } from './comment';
import { WinCondition } from './win-condition';

export class DummyData {

  public c1 = new Comment(['Aditi', 'Romi'], ['Alex'], 1, 'Alp C.', 1, 5, ['prototype'],
                          'This feature is really good', 100, false);
  public c2 = new Comment(['Aditi', 'Romi'], ['Alex'], 0, 'Romi A.', 1, 5, ['prototype'],
                          'I am not sure that we can implement this', 100, false);
  public c3 = new Comment(['Aditi', 'Romi'], ['Alex H.'], -1, 'Romi A.', 1, 5, ['prototype'],
                          'Looks good! Well done', 100, false);
  public c4 = new Comment(['Aditi', 'Romi'], ['Doruk K.'], 1, 'Romi A.', 1, 5, ['prototype'],
                          'This will work!', 100, false);

  public w1 =new WinCondition(['Aditi','Romi'],['Doruk'],0,'Kam',5,5,[],
                  "As a user, I can upvote and downvote the posts",
                  [this.c1,this.c2,this.c3,this.c4]);

	constructor() {

	}

}
