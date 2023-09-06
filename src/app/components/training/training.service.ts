import { Injectable } from "@angular/core";
import { Exercise } from "./exercise.model";
import {Subject} from 'rxjs';

@Injectable()
export class TrainingService {
  constructor() {}

  private runningExercise: Exercise;
  subject= new Subject<Exercise>();


  private availableExercises: Exercise[] = [
    { id: "crunches", name: "Crunches", duration: 30, calories: 8 },
    { id: "touch-toes", name: "Touch toes", duration: 30, calories: 8 },
    { id: "side-lunges", name: "Side lunges", duration: 30, calories: 8 },
    { id: "burpees", name: "Burpees", duration: 30, calories: 8 },
  ];

  getAvailableExercises() {
    return [...this.availableExercises];
  }

  startTraining(selectedId: string) {
    this.runningExercise= this.availableExercises.find(exercise => exercise.id === selectedId)
    this.subject.next({...this.runningExercise});//This will emit an subject (which is equal to event) with a copy of this.runningExercise object
  }
}
