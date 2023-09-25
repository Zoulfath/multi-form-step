import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  form!: FormGroup;

  constructor(private formBuilder:FormBuilder, private route:Router, private formService: FormService){}

  ngOnInit() {
    const state: any = this.formService.getState()
    this.form = this.formBuilder.group({
      name: [state.name, [Validators.required]],
      email: [state.email, [Validators.required, Validators.email]],
      phoneNumber: [state.phoneNumber, [Validators.required]]
    })
  }

  onSubmitForm() {
    this.formService.setState({
      name: this.form.value.name,
      email: this.form.value.email,
      phoneNumber: this.form.value.phoneNumber,
    });
    this.route.navigate(['/plan']);
}

}
