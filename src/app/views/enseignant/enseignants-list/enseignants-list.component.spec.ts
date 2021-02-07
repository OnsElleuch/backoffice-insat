import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsListComponent } from './enseignants-list.component';

describe('EnseignantsListComponent', () => {
  let component: EnseignantsListComponent;
  let fixture: ComponentFixture<EnseignantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
