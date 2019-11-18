import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGroceryListItemComponent } from './a-grocery-list-item.component';

describe('AGroceryListItemComponent', () => {
  let component: AGroceryListItemComponent;
  let fixture: ComponentFixture<AGroceryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGroceryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGroceryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
