import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {ViewTodosComponent} from './components/view-todos/view-todos.component';
import {NewTodoDialogComponent} from './components/new-todo-dialog/new-todo-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {EditTodoDialogComponent} from './components/edit-todo-dialog/edit-todo-dialog.component';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ViewTodosComponent,
    NewTodoDialogComponent,
    ConfirmationDialogComponent,
    EditTodoDialogComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewTodoDialogComponent, ConfirmationDialogComponent, EditTodoDialogComponent]

})
export class AppModule {
}
