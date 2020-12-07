import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubTopicsComponent } from './create-sub-topics.component';

describe('CreateSubTopicsComponent', () => {
  let component: CreateSubTopicsComponent;
  let fixture: ComponentFixture<CreateSubTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
