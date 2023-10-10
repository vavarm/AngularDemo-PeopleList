import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleNumberComponent } from './people-number.component';

describe('PeopleNumberComponent', () => {
  let component: PeopleNumberComponent;
  let fixture: ComponentFixture<PeopleNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleNumberComponent]
    });
    fixture = TestBed.createComponent(PeopleNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
