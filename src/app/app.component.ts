import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openSideNav=false;
  title = 'angular-material-firebase-app';
  menuOptions=['login','signup','training'];

  constructor(private router: Router){}

  toggleSideNav(){
    this.openSideNav=!this.openSideNav;
  }

  goHome(){
    this.router.navigate(['/']);
  }

  getToPage(path:string){
    this.router.navigate([path]);
  }
}
