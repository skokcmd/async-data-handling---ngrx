import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  allTodos$ = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo(content: string) {
    this.todoService.addTodo(content);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
