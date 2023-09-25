import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _state: object = {
    name: '',
    email: '',
    phoneNumber: '',
    toggle: false,
    addonsValue: {
      1: false,
      2: false,
      3: false,
    },
    option: ''
  };
  private plans: any = [{
    id: 1,
    name: 'Arcade',
    price_yearly: 90,
    price_monthly: 9,
    icon: 'icon-arcade'
  },
  {
    id: 2,
    name: 'Advanced',
    price_yearly: 120,
    price_monthly: 12,
    icon: 'icon-advanced'
  },
  {
    id: 3,
    name: 'Pro',
    price_yearly: 150,
    price_monthly: 15,
    icon: 'icon-pro'
  }]

  private addons: any = [{
    id: 1,
    name: 'Online Service',
    description: 'Access to multiplayer games',
    price_monthly: 1,
    price_yearly: 1
  },
  {
    id: 2,
    name: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    price_monthly: 2,
    price_yearly: 2
  },
  {
    id: 3,
    name: 'Customisable Profile',
    description: 'Custom theme on your profile',
    price_monthly: 2,
    price_yearly: 2
  }]

  getState() {
    return this._state;
  }
  getPlans() {
    return this.plans;
  }
  getAddons() {
    return this.addons;
  }
  setState(data: object) {
    Object.assign(this._state, data);
  }
}
