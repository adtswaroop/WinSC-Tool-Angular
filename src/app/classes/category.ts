export class Category {
    public name: string;
    public isMMF: boolean;
    public color: string;
  
    constructor($name: string, $isMMF: boolean, $color: string) {
      this.name = $name;
      this.isMMF = $isMMF;
      this.color = $color;
    }
  }
  