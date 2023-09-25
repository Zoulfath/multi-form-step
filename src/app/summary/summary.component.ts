import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  constructor(private router:Router,  private formService: FormService){}
  selectedPlan: any;
  selectedAddons: any;
  formState: any;
  totalPrice: Number = 0;

  ngOnInit(): void{
    const plans: any = this.formService.getPlans();
    const addons: any = this.formService.getAddons();
    this.formState = this.formService.getState();
    this.selectedPlan = plans.find((plan: any) => plan.id == Number(this.formState.option));
    this.selectedAddons = addons.filter((addon: any) => this.formState.addonsValue[addon.id]);
    this.selectedAddons.forEach((a: any) => {
      if (this.formState.toggle) {
        this.totalPrice += a.price_yearly
      } else {
        this.totalPrice += a.price_monthly
      }
    })
    if(this.formState.toggle) {
      this.totalPrice += this.selectedPlan.price_yearly
    } else {
      this.totalPrice += this.selectedPlan.price_monthly
    }
  }

  goBackAdd(): void{
    this.router.navigate(['/add']);
  }
  onChange(): void{
    this.router.navigate(['/plan']);
  }
}
