import { Injectable } from "@angular/core";
import { IMenuOption } from "../data/menu.model";

//@Injectable annotation enables a feature: Inject a service to another service
@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor() {}

  toggleLoginLogoutButton(menuOptions: IMenuOption[], isAuth: boolean) {
    if (isAuth) this.removeItemsFromArray(menuOptions, ["signup", "login"]);
    else this.removeItemsFromArray(menuOptions, ["training", "logout"]);

    return menuOptions;
  }

  //Note: we use splice(indexOfElement, numberOfElementsToRemove); to remove an element from an array.
  removeItemsFromArray(menuOptions: IMenuOption[], arr: string[]) {
    arr.forEach((item) => {
      menuOptions.splice(
        menuOptions.findIndex((i) => i.text == item),
        1
      );
    });
  }
}
