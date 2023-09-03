import { Component, EventEmitter, Output } from "@angular/core";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from "@angular/material/dialog";
import { ProductsComponent } from "../../products/products.component";
import { StopTrainingComponent } from "../stop-training/stop-training.component";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.css"],
})
export class CurrentTrainingComponent {
  progress = 0;
  timer: any;

  @Output() trainingExitEvent = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }
  
  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 2;
      if (this.progress >= 100) clearInterval(this.timer);
    }, 100);
  }

  onStop(): void {
    clearInterval(this.timer); //This will pause progress.

    let testObj = {
      data: {
        // Here 'data' is a keyword and you can't change it.
        //You can put any key,value pair here, no interface required.
        name: "Naga",
        email: "naga@gmail.com",
        progress: this.progress,
      },
    };

    const dialogRef = this.dialog.open(StopTrainingComponent, testObj);

    // When ever dialog box is closed, it returns an observerable. Hence we can subscribe to it
    dialogRef.afterClosed().subscribe((result) => {
      //console.log(result); -- To test what's coming in result.
      if (result) this.trainingExitEvent.emit();
      else this.startOrResumeTimer();
    });
  }


}
