import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Todo} from '../../models/todo';
import {AngularFireDatabase} from 'angularfire2/database';
import {TodoDataService} from '../../services/todo-data.service';

@Component({
  selector: 'app-new-todo-dialog',
  templateUrl: './new-todo-dialog.component.html',
  styleUrls: ['./new-todo-dialog.component.scss']
})
export class NewTodoDialogComponent implements OnInit {

  newTodoForm: FormGroup;
  title: string = 'New Todo';


  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewTodoDialogComponent>,
    private db: AngularFireDatabase,
    private todoDataService: TodoDataService
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newTodoForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  save(todo: Todo) {
    const newID = this.generateId();
    todo.id = newID;
    todo.created = new Date().toString();
    this.todoDataService.createNew(todo);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  private generateId(): string {
    // return UUIdGenerator.UUID();
    return new Date().valueOf().toString();
  }

}
