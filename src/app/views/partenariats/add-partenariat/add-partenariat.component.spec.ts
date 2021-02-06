import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartenariatComponent } from './add-partenariat.component';

describe('AddPartenariatComponent', () => {
  let component: AddPartenariatComponent;
  let fixture: ComponentFixture<AddPartenariatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartenariatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartenariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
