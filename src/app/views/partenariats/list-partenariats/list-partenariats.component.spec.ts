import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartenariatsComponent } from './list-partenariats.component';

describe('ListPartenariatsComponent', () => {
  let component: ListPartenariatsComponent;
  let fixture: ComponentFixture<ListPartenariatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPartenariatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartenariatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
