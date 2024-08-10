import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlFieldComponent } from './form-control-field.component';

describe('FormControlFieldComponent', () => {
  let component: FormControlFieldComponent;
  let fixture: ComponentFixture<FormControlFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
