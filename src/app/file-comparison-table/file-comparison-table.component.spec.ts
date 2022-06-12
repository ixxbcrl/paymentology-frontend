import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComparisonTableComponent } from './file-comparison-table.component';

describe('FileComparisonTableComponent', () => {
  let component: FileComparisonTableComponent;
  let fixture: ComponentFixture<FileComparisonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileComparisonTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileComparisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
