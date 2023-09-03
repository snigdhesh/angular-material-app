import { Component, EventEmitter, Output } from "@angular/core";
import { IMenuOption } from "../../data/IMenuOptions";
import { MenuItems } from "../../data/menu-items";
import { AuthService } from "../../auth/auth.service";
import { NavigationService } from "../navigation.service";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"],
})
export class SidenavListComponent {
  @Output() toggleSideNavEvent = new EventEmitter();

  menuOptions: IMenuOption[];
  isAuth: boolean = false;

  constructor(private authService: AuthService, private navigationService: NavigationService){}

  ngOnInit(){
    this.menuOptions=MenuItems;

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

  toggleSideNav() {
    this.toggleSideNavEvent.emit();
  }
}
