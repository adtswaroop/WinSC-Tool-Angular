import { Component, OnInit, Input } from '@angular/core';
import { Benefit } from '../../classes/benefit';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { categories } from '../category-holder/dummyCategories';
import { DummyData } from './../../classes/dummy-data';
import { ProjectService } from '../../services/project/project.service';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-project-benefits',
  templateUrl: './project-benefits.component.html',
  styleUrls: ['./project-benefits.component.css']
})
export class ProjectBenefitsComponent implements OnInit {
  
  allBenefitsData:any = {};
  @Input() Benefit = Benefit;
  // sortStates;
  // currentSortState;

  dropdownList = [];
  selectedItems = [];
  selectedCategories = [];
  dropdownSettings = {};
  currentProjectId;
  benefitsArray: Benefit[] = [];
  newBen:Benefit;
  newBenefitText: string="";

  constructor( private serviceCall : BackendService, private projectService: ProjectService) {
    this.projectService.getActiveProjectId.subscribe((projectId) => {
      this.currentProjectId = projectId;
   });
  }

  ngOnInit() {
    // this.sortStates = ["Sort By", "Most Likes", "Least Likes"];
    // this.currentSortState = "Sort By";
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

   this.getAllBenefits();
    
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

getAllBenefits(){
  this.serviceCall.getAllBenefits(this.currentProjectId).subscribe(
    data=>{this.allBenefitsData = data},
    err=>{console.log(err)},
    ()=>{this.showBenefits(this.allBenefitsData)}
  );
}

showBenefits(benefits){
 this.benefitsArray = benefits;
 console.log(this.benefitsArray)
} 

createNewBenefit(){
 if(!(this.newBenefitText == ""))
 {
    this.newBen = new Benefit(this.newBenefitText , 0, this.selectedCategories , null);
    this.serviceCall.createBenefit(this.currentProjectId, this.newBen).subscribe(
      data=>{console.log("Benefit created!\n" + data)},
      err=>{console.log(err)}
    )
    this.newBenefitText = "";
 }
 else alert("You forgot to enter the benefit text!");
 this.getAllBenefits();
}

deleteBenefit(benefitid){
  let confirmDeletion = confirm("Are you sure?");
  if(confirmDeletion)
  {
    this.serviceCall.deleteBenefit(benefitid).subscribe(
      data=>{console.log("Deleted benefit!" + data)},
      err=>{console.log(err)}
    )
  }
  this.getAllBenefits();
}

updateBenefit(benefit){
  console.log("Update Benefit...");
  console.log(benefit);
  this.newBen = new Benefit(benefit.text , benefit.value, benefit.categories, benefit.id);
  console.log(this.newBen);
  this.serviceCall.updateBenefit(this.newBen , benefit.id).subscribe(
    data=>{console.log("Benefit updated!" + data)},
    err=>{console.log(err)}
  )
  alert("Successfully updated the benefit value.");
  this.getAllBenefits();
}

sliderMoved(value:any, benefit: Benefit){
  benefit.value = value.value;
}

}
