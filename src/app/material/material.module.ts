import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule {
}
