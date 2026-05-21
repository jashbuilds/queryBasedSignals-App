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
    const tasks = this.taskCardComp()?.tasks
    tasks?.forEach((task) => {
      task.completed = true
      task.status = 'Complete'
    })
  }

  draftAll() {
    const tasks = this.taskCardComp()?.tasks
    tasks?.forEach((task) => {
      task.completed = false
      task.status = 'Draft'
    })
  }
}
