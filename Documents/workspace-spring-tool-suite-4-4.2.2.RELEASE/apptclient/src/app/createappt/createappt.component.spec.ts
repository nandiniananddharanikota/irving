import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateapptComponent } from './createappt.component';

describe('CreateapptComponent', () => {
  let component: CreateapptComponent;
  let fixture: ComponentFixture<CreateapptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateapptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateapptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
