import { Component, EventEmitter, Output } from "@angular/core";
import { IMenuOption } from "../../data/IMenuOptions";
import { MenuItems } from "../../data/menu-items";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"],
})
export class SidenavListComponent {
  @Output() toggleSideNavEvent = new EventEmitter();

  menuOptions: IMenuOption[];

  ngOnInit(){
    this.menuOptions=MenuItems;
  }

  toggleSideNav() {
    this.toggleSideNavEvent.emit();
  }
}
