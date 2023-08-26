import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroupDirective,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../store/todo.actions';
import { v4 as uuid } from 'uuid';
import { AppState } from '../store/todo.model';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  store = inject(Store<AppState>);

  todoForm!: FormGroup;

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: [null, Validators.required],
      priority: [null, Validators.required],
      description: [null],
    });
  }

  submitForm(formGroupDirective: FormGroupDirective) {
    if (!this.todoForm.valid) return;
    const todo = {
      ...this.todoForm.value,
      id: uuid(),
      createdAt: new Date().getTime(),
    };
    this.store.dispatch(addTodo({ todo }));
    this.todoForm.reset();
    formGroupDirective.resetForm();
  }
}
