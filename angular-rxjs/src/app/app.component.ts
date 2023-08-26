import { Component } from '@angular/core';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { CardListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AddTodoComponent, CardListComponent],
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'angular-rxjs';
}
