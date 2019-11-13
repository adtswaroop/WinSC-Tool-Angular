import { User } from './user';

export class Voters {
  public winConditionId: number;
  public commmentId: number;
  public upvoters: Array<User>;
  public downvoters: Array<User>;

}
