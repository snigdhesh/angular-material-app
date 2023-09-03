import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { IMenuOption } from "../../data/IMenuOptions";
import { MenuItems } from "../../data/menu-items";
import { AuthService } from "../../auth/auth.service";
import { NavigationService } from "../navigation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSideNavEvent = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService,private navigationService: NavigationService) { }

  menuOptions: IMenuOption[];

  isAuth: boolean = false;

  ngOnInit() {
    this.menuOptions = [...MenuItems];

    //This runs, whenever event/subject is emitted.
    this.authService.subject.subscribe(authStatus => {
      console.log("AuthStatus", authStatus);
      this.isAuth = authStatus;
      console.log("Authentication", this.isAuth)
      this.toggleMenuOptions();
    })

    //This runs only when component is initialized
    this.toggleMenuOptions();

  }

  toggleMenuOptions(){
    this.menuOptions=[...MenuItems]//send a copy of array to method. This way if element is deleted in copy, actual array will not be effected.
    this.menuOptions=this.navigationService.toggleLoginLogoutButton(this.menuOptions,this.isAuth);
  }

  goHome() {
    this.router.navigate(["/"]);
  }

  toggleSideNav() {
    this.toggleSideNavEvent.emit();
  }

  getToPage(path: string) {
    this.router.navigate([path]);
  }

  //unsubscribe any subscriptions, to avoid any memory leaks.
  ngOnDestroy() {
    this.authService.subject.unsubscribe();
  }
}
