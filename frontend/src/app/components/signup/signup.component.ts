import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { SignupService } from '../../services/common/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp : FormGroup;
  isLoaded : boolean;
  signUpForm = {
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]) 
    
  }

  constructor(
    private service : SignupService
  ) { }

  private createForm() {
    this.formSignUp = new FormGroup(this.signUpForm);
  }

  ngOnInit() {
    this.isLoaded = false;
    this.createForm();
    this.isLoaded = true;
  }

  async createCustomerSubmit() {
    await this.service.create(this.formSignUp.value);
    this.formSignUp.reset();
  }

}
