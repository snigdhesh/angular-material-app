import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent {
  @Output() trainingStartedEvent = new EventEmitter<void>();
  foods = [
    {value: 'crunches', viewValue: 'crunches'},
    {value: 'touch-toes', viewValue: 'touch-toes'},
    {value: 'side-lunges', viewValue: 'side-lunges'},
    {value: 'burpees', viewValue: 'burpees'}
  ];


  startTraining(){
    this.trainingStartedEvent.emit();
  }
}
