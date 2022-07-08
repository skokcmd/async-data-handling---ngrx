import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input()
  allTodos$: BehaviorSubject<Todo[]>;
  todo: string;

  @Output()
  onAddTodo: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onRemoveTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  addTodo(content: string) {
    // this.todoService.addTodo(content);
    this.onAddTodo.emit(content);
  }

  removeTodo(id: number) {
    // this.todoService.removeTodo(id);
    this.onRemoveTodo.emit(id);
  }
}
