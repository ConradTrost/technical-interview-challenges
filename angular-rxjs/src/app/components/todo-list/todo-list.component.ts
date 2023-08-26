import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  selectSortedTodosByDate,
  selectSortedTodosByPriority,
} from '../../store/todo.selector';
import { removeTodo } from '../../store/todo.actions';
import { AppState, Priority, Todo } from '../../store/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './todo-list.component.html',
  imports: [
    CommonModule,
    AsyncPipe,
    NgFor,
    NgIf,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
})
export class CardListComponent implements OnInit {
  store = inject(Store<AppState>);

  todos$!: Observable<Todo[]>;
  Priority = Priority;
  sortMethodInput = new FormControl('priority');
  sortMethods = [
    {
      name: 'Priority',
      value: 'priority',
    },
    {
      name: 'Most Recent',
      value: 'mostRecent',
    },
  ];

  ngOnInit(): void {
    this.todos$ = this.store.select(selectSortedTodosByPriority);

    this.sortMethodInput.valueChanges.subscribe((sortMethod) => {
      console.log(sortMethod);
      if (sortMethod === 'mostRecent') {
        this.todos$ = this.store.select(selectSortedTodosByDate);
      } else {
        this.todos$ = this.store.select(selectSortedTodosByPriority);
      }
    });
  }

  closeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }
}
