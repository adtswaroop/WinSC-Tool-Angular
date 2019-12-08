import { ProjectUser } from './project-user';

export class Project {
  public name: string;
  public id: number;
  public description: string;
  public accessLevel: string; //private or public
  public access: string; //private or public
  public vision: string;
  public archieved: boolean;
  public deleted: boolean;
  public businessValueWeight: number;
  public relativePenaltyWeight: number;
  public easeOfRealizationWeight: number;
  public createdAt: Date;
  public updatedAt: Date;
  public users: Array<ProjectUser>;

  constructor($name: string, $id: number, $description: string, $accessLevel: string, $vision: string, $archieved: boolean,
      $deleted: boolean, $businessValueWeight: number, $relativePenaltyWeight: number, $easeOfRealizationWeight: number,
      $created: Date, $updatedAt: Date) {
        this.name = $name;
        this.id = $id;
        this.description = $description;
        this.accessLevel = $accessLevel;
        this.vision = $vision;
        this.archieved = $archieved;
        this.deleted = $deleted;
        this.businessValueWeight = $businessValueWeight;
        this.relativePenaltyWeight = $relativePenaltyWeight;
        this.easeOfRealizationWeight = $easeOfRealizationWeight;
        this.createdAt = $created;
        this.updatedAt = $updatedAt;
  }
}
