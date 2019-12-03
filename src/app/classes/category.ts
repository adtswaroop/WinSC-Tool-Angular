export class Category {
    public id: number;
    public name: string;
    public projectId: number;
    public color: string;
    public type: string;


    constructor($id: number, $name: string, $projectId: number, $color: string, $type: string) {
      this.id = $id;
      this.name = $name;
      this.projectId = $projectId;
      this.color = $color;
      this.type = $type;
    }
  }
