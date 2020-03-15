import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template4ComponentComponent } from './template4-component.component';

describe('Template4ComponentComponent', () => {
  let component: Template4ComponentComponent;
  let fixture: ComponentFixture<Template4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
