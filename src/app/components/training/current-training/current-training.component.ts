import {
  Component,
  EventEmitter,
  OnInit,
  Output
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
  runningExercise: Exercise;

  @Output() trainingExitEvent = new EventEmitter<void>();
  subscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void{
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.runningExercise=this.trainingService.getRunningExercise();
    /**
     * How step is calculated?
     * Given exercise.duration = 30 sec
     * Which means this 30sec is spread across 100%.
     * So, for every 30/100 sec, we need to increse progress to 1 unit.
     * For 100 units, it's 30 seconds. For 1 unit it's 0.3 seconds
     * 
     * Convert this 0.3 seconds to milliseconds. Because setInterval() method accepts time in milliseconds.
     * To convert seconds to milliseconds, multilpy with 1000.
     * so 0.3*1000
     * 
     * In total (exercise.duration/100)*1000 milliseconds.
     * 
     */
    const step=this.trainingService.getRunningExercise().duration/100*1000; //Here duration is in seconds.

    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100){
        this.trainingService.completeExercise();
        clearInterval(this.timer);//This default function will pause progress.
      }
    }, step); //Here step parameter is in milliseconds
  }

  onStop(): void {
    clearInterval(this.timer); //This default function will pause progress.

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

    // When ever dialog box is closed, it returns an observerable. Hence we can subscribe to it.
    dialogRef.afterClosed().subscribe((stopTraining) => {
      //console.log(stopTraining); -- To test what's coming in 'stopTraining' of dialog box.
      //"Do you want to stop traning?" result will be either 'true' or 'false' - we defined these boolen values in "stop-training.component.html"
      //If "yes" is clicked on stop-training.component.html, it returns true
      //If "no" is clicked on stop-training.component.html, it returns false
      
      if (stopTraining)//possible 'stopTraining' values are 'true' and 'false'
        this.trainingService.cancelExercise(this.progress);
      else 
        this.startOrResumeTimer();
    });
  }
}
