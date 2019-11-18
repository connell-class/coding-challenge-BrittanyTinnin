import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGroceryListComponent } from './a-grocery-list.component';

describe('AGroceryListComponent', () => {
  let component: AGroceryListComponent;
  let fixture: ComponentFixture<AGroceryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGroceryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGroceryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
