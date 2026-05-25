import { Component, viewChild } from '@angular/core';
import { TaskCardsComponent } from './task-cards/task-cards.component';

@Component({
  selector: 'app-task-controller',
  imports: [TaskCardsComponent],
  templateUrl: './task-controller.component.html',
  styleUrl: './task-controller.component.css'
})
export class TaskControllerComponent {

  taskCardComp = viewChild(TaskCardsComponent)

  completeAll() {
    this.taskCardComp()?.onCompleteAll()
  }

  draftAll() {
    this.taskCardComp()?.onDraftAll()
  }
}
