import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalendriersComponent } from './list-calendriers.component';

describe('ListCalendriersComponent', () => {
  let component: ListCalendriersComponent;
  let fixture: ComponentFixture<ListCalendriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCalendriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCalendriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
