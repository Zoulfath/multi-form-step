import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import{FormGroup, FormBuilder} from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  constructor(private router:Router, private formBuilder:FormBuilder, private formService: FormService){}
  planForm!: FormGroup;
  toggle: boolean = false;
  option: string = '';
  plans: any = []

  ngOnInit(): void{
    const state: any = this.formService.getState();
    this.plans = this.formService.getPlans();
    this.toggle = state.toggle;
    this.option = state.option;
  }

  onSubmitForm() {
    this.formService.setState({
      option: this.option,
      toggle: this.toggle
    });
    this.router.navigate(['/add']);
  }

  goBack(){
    this.router.navigate(['/info']);
  }
}
