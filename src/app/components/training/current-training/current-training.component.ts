import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { StopTrainingComponent } from "../stop-training/stop-training.component";
import { TrainingService } from "../training.service";
import { Exercise } from "../exercise.model";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.css"],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any;
  @Input() exercise: Exercise;

  @Output() trainingExitEvent = new EventEmitter<void>();
  subscription: Subscription;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void{
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
      //console.log(result); -- To test what's coming in result of dialog box.
      if (result)
        this.trainingExitEvent.emit(); //This event is used in training.component.html
      else this.startOrResumeTimer();
    });
  }
}
