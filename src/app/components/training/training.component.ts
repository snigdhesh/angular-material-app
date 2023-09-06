import { Component, OnDestroy, OnInit } from "@angular/core";
import { TrainingService } from "./training.service";
import { Subscription } from "rxjs";
import { Exercise } from "./exercise.model";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.css"],
})
export class TrainingComponent implements OnInit, OnDestroy {
  onGoingTraining = false;
  subscription: Subscription;
  exercise: Exercise;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.subscription = this.trainingService.subject.subscribe((exercise) => {
      if (exercise) this.onGoingTraining = true;
      else this.onGoingTraining = false;
      this.exercise=exercise
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
