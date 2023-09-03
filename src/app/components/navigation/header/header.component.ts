import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { IMenuOption } from "../../data/IMenuOptions";
import { MenuItems } from "../../data/menu-items";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSideNavEvent = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) { }

  menuOptions: IMenuOption[];

  isAuth: boolean = false;

  ngOnInit() {
    this.menuOptions = [...MenuItems];

    //This runs, whenever event/subject is emitted.
    this.authService.subject.subscribe(authStatus => {
      console.log("AuthStatus", authStatus);
      this.isAuth = authStatus;
      console.log("Authentication", this.isAuth)
      this.toggleLoginLogoutButton();
    })

    //This runs only when component is initialized
    this.toggleLoginLogoutButton();

  }

  toggleLoginLogoutButton() {
    this.menuOptions = [...MenuItems];

    if (this.isAuth)
      this.removeItemsFromArray(["signup", "login"]);
    else
      this.removeItemsFromArray(["training", "logout"]);
  }

  removeItemsFromArray(arr: string[]) {
    arr.forEach(item => {
      this.menuOptions.splice(this.menuOptions.findIndex(i => i.text == item), 1);// we use splice(indexOfElement, numberOfElementsToRemove); to remove an element from an array.
    })
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
