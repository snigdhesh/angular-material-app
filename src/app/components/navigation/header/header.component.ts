import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { IMenuOption } from "../../data/IMenuOptions";
import { MenuItems } from "../../data/menu-items";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Output() toggleSideNavEvent = new EventEmitter<void>();

  constructor(private router: Router) {}
  menuOptions: IMenuOption[];

  ngOnInit(){
    this.menuOptions=MenuItems;
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
}
