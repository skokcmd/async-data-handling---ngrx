import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoPageComponent } from '../../components/todo-page/todo-page.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../../state/todos/todo.reducer';

@NgModule({
  declarations: [TodoListComponent, TodoPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({ todos: todoReducer }), // takes care of todoState
  ],
  exports: [TodoListComponent, TodoPageComponent],
})
export class TodoModule {}
