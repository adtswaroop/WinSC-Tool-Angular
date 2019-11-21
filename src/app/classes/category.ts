export class Category {
    public id: number;
    public name: string;
    public projectId: number;
    public color: string;
    public isMMF: boolean;
    
  
    constructor($id: number, $name: string, $projectId: number, $color: string, $isMMF: boolean) {
      this.id = $id;
      this.name = $name;
      this.projectId = $projectId;
      this.color = $color;
      this.isMMF = $isMMF;
    }
  }
  