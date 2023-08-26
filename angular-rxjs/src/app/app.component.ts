import { Component } from '@angular/core';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CardListComponent } from './todo-list/todo-list.component';

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
