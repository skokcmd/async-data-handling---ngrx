import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoModule } from './features/todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgbModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
