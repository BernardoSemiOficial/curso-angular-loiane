import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDriveFormComponent } from './data-drive-form.component';

describe('DataDriveFormComponent', () => {
  let component: DataDriveFormComponent;
  let fixture: ComponentFixture<DataDriveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDriveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
