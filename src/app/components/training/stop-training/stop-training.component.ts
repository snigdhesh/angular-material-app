import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-stop-training",
  templateUrl: "./stop-training.component.html",
  styleUrls: ["./stop-training.component.css"]
})
export class StopTrainingComponent {
  /*
   Here @Inject is like @Autowired in java, we are autowiring incoming "data" object in constructor.
   And @Inject annotation expects a const MAT_DIALOG_DATA, which comes from @angular/material/dialog.
   This "data" object is coming from 'current-training.component.ts'
   This "data" object can be used in html directly.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
