import { Injectable } from "@angular/core";
import { Exercise } from "./exercise.model";
import { Subject } from "rxjs";

@Injectable()
export class TrainingService {
  constructor() {}

  private runningExercise: Exercise;
  private completedExercises: Exercise[] = [];
  subject = new Subject<Exercise>();

  private availableExercises: Exercise[] = [
    //All duration is in seconds
    { id: "crunches", name: "Crunches", duration: 30, calories: 8 },
    { id: "touch-toes", name: "Touch toes", duration: 180, calories: 25 },
    { id: "side-lunges", name: "Side lunges", duration: 60, calories: 35 },
    { id: "burpees", name: "Burpees", duration: 10, calories: 100 },
  ];

  getAvailableExercises() {
    return [...this.availableExercises];
  }

  startTraining(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      (exercise) => exercise.id === selectedId
    );
    this.subject.next({ ...this.runningExercise }); //This will emit an subject (which is equal to event) with a copy of this.runningExercise object
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.completedExercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: "completed",
    });
    this.runningExercise = null;
    this.subject.next(this.runningExercise);
  }
  
  cancelExercise(progress: number) {
    this.completedExercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress/100), //We overwrite duration here, because exercise is cancelled in middle
      calories: this.runningExercise.duration * (progress/100), //We overwrite duration here, because exercise is cancelled in middle
      date: new Date(),
      state: "cancelled",
    });
    this.runningExercise = null;
    this.subject.next(this.runningExercise);
  }
}
