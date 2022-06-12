import { Component, Input, OnInit } from '@angular/core';
import { TransactionReconcileResponseDto } from '../transaction-reconcile-response-dto';
import { TransactionReconcileSummaryDto } from '../transaction-reconcile-summary-dto';

@Component({
  selector: 'app-file-comparison-summary',
  templateUrl: './file-comparison-summary.component.html',
  styleUrls: ['./file-comparison-summary.component.css']
})
export class FileComparisonSummaryComponent implements OnInit {
  @Input() fileSummary?: Boolean;
  @Input() summaryDto?: TransactionReconcileSummaryDto;
  tableSummaryDto?: TransactionReconcileResponseDto[];

  constructor() { }

  ngOnInit(): void {
  }

  populateUnmatchedTable() {
    this.tableSummaryDto = this.summaryDto?.transactionReconcileResponseDto;
  }
}
