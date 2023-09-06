import { Component, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  dob:string;
  maxDate: Date;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.maxDate=new Date(); //This returns today
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  signUpForm=new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    datepicker: new FormControl('',Validators.required),
    agreeToTerms: new FormControl('',Validators.required)
  });

  onSubmit(){
    var formatedDate = new Date(this.signUpForm.value.datepicker).toLocaleString();
    this.dob=formatedDate.split(",")[0];
    this.authService.registerUser({
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    })

  }
  
}
