import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private db: AngularFireDatabase) {
  }

  get(id): any {
    return this.db.object('/todos/' + id).valueChanges();

  }

  getById(id): any {
    return this.db.object('/todos/' + id);

  }

  getAll(): AngularFireList<Todo> {
    return this.db.list<Todo>('todos');
  }

  createNew(todo: Todo): void {
    this.db.list('todos').push(todo);
  }

  update(key, todoUpdated: Todo) {
    const todo = this.getById(key);
    todo.update({
      id: todoUpdated.id,
      name: todoUpdated.name,
      description: todoUpdated.description,
      created: todoUpdated.created
    });
  }

  delete(id: string): void {
    this.db.list('todos').remove(id).catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
