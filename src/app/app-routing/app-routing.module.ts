import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ViewTodosComponent} from '../components/view-todos/view-todos.component';
import {TodoDetailComponent} from '../components/todo-detail/todo-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: 'todos', component: ViewTodosComponent},
  {path: 'details/:id', component: TodoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
