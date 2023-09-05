import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { TrainingComponent } from "./components/training/training.component";
import { authGuard } from "./components/auth/auth.guard";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "training", component: TrainingComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
