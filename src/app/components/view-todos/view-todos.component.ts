import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from '@angular/material';
import {ViewTodosDataSource} from './view-todos-datasource';
import {NewTodoDialogComponent} from '../new-todo-dialog/new-todo-dialog.component';
import {Subscription} from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';
import {TodoDataService} from '../../services/todo-data.service';
import {map} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {ConfirmationService} from '../../services/confirmation.service';
import {ConfirmationButtonAction} from '../confirmation-dialog/confirmation-dialog.component';
import {Router} from '@angular/router';
import {EditTodoDialogComponent} from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewTodosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'name', 'description', 'created', 'editAction', 'detailsAction'];
  todosSubscription: Subscription;
  todosToRemove: string[];
  myCheckbox: FormControl = new FormControl();


  constructor(private dialog: MatDialog,
              private router: Router,
              private db: AngularFireDatabase,
              private todoDataService: TodoDataService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.myCheckbox.valueChanges.subscribe(value => {
    });
    this.todosToRemove = [];
    this.todosSubscription = this.todoDataService.getAll().snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({key: a.key, ...a.payload.val()}))
      )
    ).subscribe(items => {
      this.dataSource = new ViewTodosDataSource(this.paginator, this.sort);
      this.dataSource.data = items;

    });

  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }

  openNewTodoDialog() {
    const dialogConfig = this.setMatDialogConfig();
    this.dialog.open(NewTodoDialogComponent, dialogConfig);
  }

  openEditTodoDialog(todo) {
    console.log('todo: ', todo);
    const dialogConfig = this.setMatDialogConfig();
    dialogConfig.data = {
      key: todo.key,
      id: todo.id,
      name: todo.name,
      description: todo.description,
      created: todo.created,
    };
    this.dialog.open(EditTodoDialogComponent, dialogConfig);
  }

  private setMatDialogConfig(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';
    return dialogConfig;
  }


  toggleSelect(event, $key) {
    const toRemove: boolean = event.checked;
    if (toRemove) {
      this.todosToRemove.push($key);
    } else {
      this.todosToRemove = this.todosToRemove.filter(id => id !== $key);
    }
  }

  removeTodos() {
    this.confirmationService.areYouSureDelete('Are you sure you want delete these items?')
      .subscribe(result => {
        if (result === ConfirmationButtonAction.CONFIRM) {
          this.todosToRemove.forEach(id => {
            this.todoDataService.delete(id);
            this.router.navigate([('')]);
          });
        }
      });

  }

}
