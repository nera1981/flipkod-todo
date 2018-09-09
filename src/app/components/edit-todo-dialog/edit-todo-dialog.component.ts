import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TodoDataService} from '../../services/todo-data.service';
import {Todo} from '../../models/todo';
import {AngularFireDatabase} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  editTodoForm: FormGroup;
  title: string = 'Edit Todo';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditTodoDialogComponent>,
    private db: AngularFireDatabase,
    private todoDataService: TodoDataService,
    @Inject(MAT_DIALOG_DATA) public data,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editTodoForm = this.formBuilder.group({
      id: new FormControl(this.data.id, Validators.required),
      name: new FormControl(this.data.name, Validators.required),
      description: new FormControl(this.data.description, Validators.required),
      created: new FormControl(this.data.created),

    });
  }

  update(todoUpdated) {
    this.todoDataService.update(this.data.key, todoUpdated);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
