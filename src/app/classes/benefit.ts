import { Category } from './category'

export class BenefitComponent{
    public userName: string;
    public categories: Array<Category>;
    public text: string;
    
    constructor($userName: string, $categories: Array<Category>, $text: string){
        this.userName = $userName;
        this.categories = $categories;
        this.text = $text;
    }
}

