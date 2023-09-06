import { Component, OnInit } from "@angular/core";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.css"],
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) {}

  newTrainingForm = new FormGroup({
    exercise: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  startTraining() {
    let id=this.newTrainingForm.value.exercise;
    this.trainingService.startTraining(id);
  }
}
