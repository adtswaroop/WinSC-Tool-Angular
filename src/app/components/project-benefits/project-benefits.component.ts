import { Component, OnInit, Input } from '@angular/core';
import { Benefit } from '../../classes/benefit';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { categories } from '../category-holder/dummyCategories';
import { DummyData } from './../../classes/dummy-data';
import { ProjectService } from '../../services/project/project.service';
import { BenefitsService } from '../../services/benefitsService'
import { Subscription } from 'rxjs';
import { all } from 'q';


@Component({
  selector: 'app-project-benefits',
  templateUrl: './project-benefits.component.html',
  styleUrls: ['./project-benefits.component.css']
})
export class ProjectBenefitsComponent implements OnInit {
  
  allBenefitsData:any = {};
  @Input() Benefit = Benefit;
  
  dropdownList = [];
  selectedItems = [];
  selectedCategories = [];
  dropdownSettings = {};
  currentProjectId;
  benefitsArray: Benefit[] = [];
  newBen:Benefit;
  newBenefitText: string="";
  benefitData: Subscription;

  constructor( private serviceCall : BenefitsService, private projectService: ProjectService) {
   this.benefitData = this.serviceCall.benefitData.subscribe(data=>{this.showBenefits(data)});
  }

  ngOnInit() {
    this.dropdownList = categories;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false
    };
  }

onItemSelect(item: any) {
    this.selectedCategories.push(categories.find(category => category.id == item.id));
  }

onCategoryChange(event) {
    const res =  new Array<string>();
    event.forEach(element => {
      res.push(element.name);
    });
  }


showBenefits(benefits){
  console.log("In show benefits...")
 //this.benefitsArray = benefits;
 for(let i=0; i<benefits.length; i++){
   this.benefitsArray.push(benefits[i]);
 }
 console.log(this.benefitsArray)
} 

createNewBenefit(){
 if(!(this.newBenefitText == ""))
 {
    this.newBen = new Benefit(this.newBenefitText , 0, this.selectedCategories , null);
    this.serviceCall.createBenefit(this.newBen);
    this.newBenefitText = "";
 }
 else alert("You forgot to enter the benefit text!");
}

deleteBenefit(benefitid){
  let confirmDeletion = confirm("Are you sure?");
  if(confirmDeletion)
  {
    this.serviceCall.deleteBenefit(benefitid);
  }
}

updateBenefit(benefit){
  console.log("Update Benefit...");
  console.log(benefit);
  this.newBen = new Benefit(benefit.text , benefit.value, benefit.categories, benefit.id);
  this.serviceCall.updateBenefit(this.newBen , benefit.id);
  alert("Successfully updated the benefit value.");
}

sliderMoved(value:any, benefit: Benefit){
  benefit.value = value.value;
}

}
