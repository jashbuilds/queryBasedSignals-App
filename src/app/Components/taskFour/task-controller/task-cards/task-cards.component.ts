import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-cards',
  imports: [FormsModule, NgClass],
  templateUrl: './task-cards.component.html',
  styleUrl: './task-cards.component.css',
})
export class TaskCardsComponent {

  isActive = signal(true)

  tasks = [{
    task: 'House Cleaning',
    status: 'Draft',
    completed: false
  },
  {
    task: 'Get Some Veggies',
    status: 'Complete',
    completed: true
  },
  {
    task: 'Pick Children from School',
    status: 'Draft',
    completed: false
  },
  {
    task: 'Car Wash',
    status: 'Complete',
    completed: true
  },
  {
    task: 'Gardening',
    status: 'Complete',
    completed: true
  }]

  onChangeStatus(index: number) {
    this.tasks[index].status = this.tasks[index].completed ? 'Complete' : 'Draft'
  }
}
