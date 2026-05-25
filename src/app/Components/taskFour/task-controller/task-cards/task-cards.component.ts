import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Task } from '../../tasks.model';

@Component({
  selector: 'app-task-cards',
  imports: [FormsModule, NgClass],
  templateUrl: './task-cards.component.html',
  styleUrl: './task-cards.component.css',
})
export class TaskCardsComponent {

  tasks = signal<Task[]>([{
    task: 'House Cleaning',
    completed: false
  },
  {
    task: 'Get Some Veggies',
    completed: true
  },
  {
    task: 'Pick Children from School',
    completed: false
  },
  {
    task: 'Car Wash',
    completed: true
  },
  {
    task: 'Gardening',
    completed: true
  }])

  onCompleteAll() {
    this.tasks.update(tasks => tasks.map(task => ({ ...task, completed: true })))
  }

  onDraftAll() {
    this.tasks.update(tasks => tasks.map(task => ({ ...task, completed: false })))
  }
}
