import { User } from './user';

export class ProjectUser {
  public projectId: number;
  public userId: number;
  public role: string;
  public user: User;
}
