import { Category } from './category';
import { Comment } from './comment';
import { WinCondition } from './win-condition';
import { Benefit } from './benefit';
import { Project } from './project';

export class DummyData {

  public cat1 = new Category(1, 'Prototype', 1, '#FEA60F', 'regular');
  public categoryArray1 = [this.cat1];
  public cat2 = new Category(2, 'Win Condition', 1, '#AFD459', 'regular');
  public cat3 = new Category(3, 'Comments', 1, '#690f56', 'regular');
  public cat4 = new Category(4, 'Admin', 1, '#e84c22', 'regular');
  public cat5 = new Category(5, 'Benefits', 1, '#33b0b4', 'regular');



  public categoryArray2 = [this.cat2];
  public categoryArray3 = [this.cat1, this.cat2];
  public categoryArray4 = [this.cat3];
  public categoryArray5 = [this.cat4];
  public categoryArray6 = [this.cat5];

  /*
  public c1 = new Comment(['Aditi', 'Romi'], ['Alex'], 1, 'Alp', 1, 5, this.categoryArray1,
                          'This feature is really good', 100, false);
  public c2 = new Comment(['Aditi', 'Romi'], ['Alex'], 0, 'Romi', 1, 5, this.categoryArray1,
                          'I am not sure that we can implement this', 100, false);
  public c3 = new Comment(['Aditi', 'Romi'], ['Alex'], -1, 'Romi', 1, 5, this.categoryArray1,
                          'Looks good! Well done', 100, false);
  public c4 = new Comment(['Aditi', 'Romi'], ['Doruk'], 1, 'Romi', 1, 5, this.categoryArray1,
                          'This will work!', 100, false);

  public w1 = new WinCondition(['Aditi', 'Romi'], ['Doruk'], -1, 'Kam', 5, 5, this.categoryArray5,
                  'As a user, I can upvote and downvote the posts',
                  [this.c1, this.c2, this.c3, this.c4]);


  // second win condition
  public w2c1 = new Comment(['Aditi', 'Romi'], [], -1, 'Kam', 1, 5, this.categoryArray2,
                          'This should be implemented', 100, false);
  public w2c2 = new Comment(['Kam', 'Romi'], [], 1, 'Doruk', 1, 5, this.categoryArray2,
                          'What should the comments look like?', 100, false);

  public w2 = new WinCondition(['Aditi', 'Romi'], [], 0, 'Romi', 5, 5, this.categoryArray4,
                  'As a user, I can add comments and reply to comments',
                  [this.w2c1, this.w2c2]);


  // third win condition
  public w3c1 = new Comment(['Aditi', 'Alex'], [], -1, 'Kam', 1, 5, this.categoryArray3,
                          'This should be user specific', 100, false);
  public w3c2 = new Comment(['Kam', 'Romi'], [], 1, 'Doruk', 1, 5, this.categoryArray3,
                          'We should only let the facilitator do it', 100, false);
  public w3c3 = new Comment(['Kam'], [], 0, 'Kam', 1, 5, this.categoryArray3,
                    'I agree', 100, false);

  public w3 = new WinCondition(['Alavaro', 'Kam'], [], 0, 'Romi', 5, 5, this.categoryArray3,
                  'As an owner, I can delete/hide a project from the project settings page',
                  [this.w3c1, this.w3c2, this.w3c3]);


  // fourth win condition
  public w4c1 = new Comment(['Kam', 'Alex' , 'Yicheng'], [], -1, 'Alp', 1, 5, this.categoryArray1,
                          'How do we decide who is the admin', 100, false);
  public w4c2 = new Comment(['Kam', 'Romi'], ['Aditi'], 1, 'Doruk', 1, 5, this.categoryArray1,
                          'Only the owner should be able to do it', 100, false);
  public w4c3 = new Comment(['Kam'], [], 1, 'Alp', 1, 5, this.categoryArray1,
                    'May be we can flag it and the owner can delete it themseleves if they are flagged', 100, false);
  public w4c4 = new Comment(['Alp'], [], 1, 'Kam', 1, 5, this.categoryArray1,
                    'This sounds good', 100, false);


  public w4 = new WinCondition(['Alavaro', 'Kam'], ['Aditi' , 'Doruk'], -1, 'Romi', 5, 5, this.categoryArray6,
                  'As an admin, I can edit and delete everyone\'s posts and comments.',
                  [this.w4c1, this.w4c2, this.w4c3, this.w4c4]);


  // fifth win condition
  public w5c1 = new Comment(['Kam', 'Alex' , 'Yicheng'], ['Romi', 'Doruk'], -1, 'Aditi', 1, 5, this.categoryArray3,
                          'Which part of a project can be made public?', 100, false);


  public w5 = new WinCondition(['Alavaro', 'Kam', 'Romi' , 'Alp'], ['Kam'], 1, 'Yicheng', 2, 5, this.categoryArray3,
                  'As an owner, I can make a project private or public',
                  [this.w5c1]);

  public wcArr = [this.w1, this.w2, this.w3, this.w4, this.w5 ];
   */

  //BENEFITS
  public benefit1 = new Benefit("Aditi" , [this.cat1], "Support win-win negotiations")

  // project list array and associated individual project elements
  public project1 = new Project("Project Pineapple", 1, "Pineapple is good", "public", "Pineapple vision",
  false, false, 1, 4, 5, new Date('December 17, 2018 03:24:00'), new Date('September 17, 2019 04:24:22'));

  public project2 = new Project("Project Apple", 2, "Apple is good", "private", "Apple vision",
  false, false, 2, 5, 3, new Date(), new Date());

  public project3 = new Project("Project Lemon", 3, "Lemon is good", "public", "Lemon vision",
  false, false, 0, 2, 4, new Date('November 17, 2018 03:24:00'), new Date());

  public projectArr = [this.project1, this.project2, this.project3];

	constructor() {

	}

}
