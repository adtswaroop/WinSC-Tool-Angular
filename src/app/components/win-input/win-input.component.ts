import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { WinCondition } from 'src/app/classes/win-condition';
import { User } from 'src/app/classes/user';
import { WinconditionService } from 'src/app/services/wincondition.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
// import { WinCondition } from 'src/app/classes/win-condition';

@Component({
  selector: 'app-win-input',
  templateUrl: './win-input.component.html',
  styleUrls: ['./win-input.component.css']
})
export class WinInputComponent implements OnInit {

  addWinForm : FormGroup
  @Input() categories: Array<Category>;
  @Input() currentCategory: string;
  @Output() currentCategoryChange = new EventEmitter<string>();
  @Output() addWinCondition = new EventEmitter<WinCondition>();

  constructor(private fb: FormBuilder,
              private winConditionService: WinconditionService,
              private authService: AuthenticationService) {
      this.addWinForm = this.fb.group({
      winpost: ['',[Validators.required,Validators.minLength(4)]]
    })
   }

   changeCategory(pCategory) {
     this.currentCategory = pCategory;
     this.currentCategoryChange.emit(pCategory);
   }

  ngOnInit() {
  }

  addWin() {
    const wcText = this.addWinForm.controls['winpost'].value;
    const user = this.authService.currentUserValue;
    const wc = new WinCondition(0,0,user,wcText,0,0,0,0,[],[],[],[]);
    this.winConditionService.createWincondition(wc);
  }

}
