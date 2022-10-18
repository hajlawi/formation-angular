import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreilComponent } from './appreil.component';

describe('AppreilComponent', () => {
  let component: AppreilComponent;
  let fixture: ComponentFixture<AppreilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppreilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppreilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
