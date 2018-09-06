import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldLabelExampleComponent } from './form-field-label-example.component';

describe('FormFieldLabelExampleComponent', () => {
  let component: FormFieldLabelExampleComponent;
  let fixture: ComponentFixture<FormFieldLabelExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldLabelExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldLabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
