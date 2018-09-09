import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoDataService} from '../../services/todo-data.service';
import {Subscription} from 'rxjs';
import {EditTodoDialogComponent} from '../edit-todo-dialog/edit-todo-dialog.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ConfirmationButtonAction} from '../confirmation-dialog/confirmation-dialog.component';
import {ConfirmationService} from '../../services/confirmation.service';
import {map} from 'rxjs/operators';
import {ViewTodosDataSource} from '../view-todos/view-todos-datasource';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todo: Todo;
  todoSubscription: Subscription;
  todoKey;

  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService,
              private dialog: MatDialog,
              private router: Router,
              private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['id'] !== undefined) {
      this.todoKey = this.route.snapshot.params['id'];
    }
    this.todoSubscription = this.todoDataService.get(this.todoKey).subscribe(item => {
      this.todo = item;

    });

  }


  ngOnDestroy() {
    this.todoSubscription.unsubscribe();
  }

  openEditTodoDialog(todo) {
    const dialogConfig = this.setMatDialogConfig();
    dialogConfig.data = {
      key: this.todoKey,
      id: todo.id,
      name: todo.name,
      description: todo.description,
      created: todo.created,
    };
    const dialogRef = this.dialog.open(EditTodoDialogComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(
    //   data => {
    //     console.log('Dialog output:', data);
    //     this.todo = data;
    //   }
    // );
  }

  private setMatDialogConfig(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    return dialogConfig;
  }

  deleteTodo() {
    this.confirmationService.areYouSureDelete('Are you sure you want delete these items?')
      .subscribe(result => {
        if (result === ConfirmationButtonAction.CONFIRM) {
          this.todoDataService.delete(this.todoKey);
          this.router.navigate([('/todos')]);
        }
      });

  }
}
