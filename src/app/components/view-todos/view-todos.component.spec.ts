
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodosComponent } from './view-todos.component';

describe('ViewTodosComponent', () => {
  let component: ViewTodosComponent;
  let fixture: ComponentFixture<ViewTodosComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
