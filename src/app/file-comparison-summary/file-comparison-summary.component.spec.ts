import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComparisonSummaryComponent } from './file-comparison-summary.component';

describe('FileComparisonSummaryComponent', () => {
  let component: FileComparisonSummaryComponent;
  let fixture: ComponentFixture<FileComparisonSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileComparisonSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileComparisonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
