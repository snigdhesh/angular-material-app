import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  hidePassword: boolean = true;
  loginForm: FormGroup;

  constructor(private authService: AuthService){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", {validators: [Validators.required,Validators.email]}),
      password: new FormControl("", {validators: [Validators.required]}),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
