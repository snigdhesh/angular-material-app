import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { IMenuOption } from "../../data/menu.model";
import { MenuItems } from "../../data/menu-items";
import { AuthService } from "../../auth/auth.service";
import { NavigationService } from "../navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() toggleSideNavEvent = new EventEmitter();

  menuOptions: IMenuOption[];
  isAuth: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.menuOptions = MenuItems;

    //This runs, whenever event/subject is emitted.
    this.authService.subject.subscribe((authStatus) => {
      this.isAuth = authStatus;
      this.toggleMenuOptions();
    });

    //This runs only when component is initialized
    this.toggleMenuOptions();
  }

  toggleMenuOptions() {
    this.menuOptions = [...MenuItems]; //send a copy of array to method. This way if element is deleted in copy, actual array will not be effected.
    this.menuOptions = this.navigationService.toggleLoginLogoutButton(
      this.menuOptions,
      this.isAuth
    );
  }

  toggleSideNav(path: string) {
    this.toggleSideNavEvent.emit();
    this.getToPage(path);
  }

  ngOnDestroy() {
    this.authService.subject.unsubscribe();
  }

  getToPage(path: string) {
    if (path == "logout") this.authService.logout();
    else this.router.navigate([path]);
  }

  
}
