import { Component, Input, OnInit } from '@angular/core';
import { TransactionReconcileResponseDto } from '../transaction-reconcile-response-dto';
import {MatTableDataSource} from "@angular/material/table";
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-file-comparison-table',
  templateUrl: './file-comparison-table.component.html',
  styleUrls: ['./file-comparison-table.component.css']
})
export class FileComparisonTableComponent implements OnChanges {
  @Input() summaryDto?: TransactionReconcileResponseDto[];
  tableDataSource = new MatTableDataSource<TransactionReconcileResponseDto>();
  displayedColumns: string[] = ['fileOneLineNo', 'fileOneTransactionID', 'fileOneTransactionDate', 'fileOneTransactionAmount', 
  'tableTwoCloseMatches', 'tableTwoUnmatchedLineNo', 'tableTwoUnmatchedTransactionID', 'tableTwoUnmatchedTransactionDate',
  'tableTwoUnmatchedTransactionAmount'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.summaryDto) {
      this.tableDataSource.data = this.summaryDto;
    }
  }
}
