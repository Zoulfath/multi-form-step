import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  addForm!: FormGroup;
  toggle: boolean = false;
  addonsValue: any = {
    1: false,
    2: false,
    3: false,
  }
  addons: any = [];
  constructor(private router:Router, private formBuilder:FormBuilder, private formService: FormService){}

  ngOnInit(): void{
    const state: any = this.formService.getState();
    this.addons =  this.formService.getAddons();
    this.addonsValue = state.addonsValue;
    this.toggle = state.toggle;
  }

  onSubmitForm() {
    this.formService.setState({
      addonsValue: this.addonsValue
    });
    this.router.navigate(['/summary']);
  }

  goBackPlan(): void{
    this.router.navigate(['/plan']);
  }
}
