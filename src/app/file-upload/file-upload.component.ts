import { Component, Inject, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service'
import { TransactionReconcileSummaryDto } from '../transaction-reconcile-summary-dto';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUploadOne?: File;
  fileToUploadTwo?: File;
  fileCompareSuccess: Boolean = false;
  summaryDto?: TransactionReconcileSummaryDto;

  uploadFileOne(event: Event) {
    var ev = (event.target as HTMLInputElement).files
    if (event.target && ev) {
      if (ev.length > 0) {
        this.fileToUploadOne = ev[0];
      }
    }
  }

  uploadFileTwo(event: Event) {
    var ev = (event.target as HTMLInputElement).files
    if (event.target && ev) {
      if (ev.length > 0) {
        this.fileToUploadTwo = ev[0];
      }
    }
  }

  uploadFileToActivity() {
    if (this.fileToUploadOne && this.fileToUploadTwo) {
      this.fileUploadService.postFile(this.fileToUploadOne, this.fileToUploadTwo)
      .subscribe(summaryDto => {
        this.fileCompareSuccess = true;
        this.summaryDto = summaryDto;
        }, error => {
          // this.dialog.open(ErrorDialogComponent, {
          //   width: '250px',
          //   data: {
          //     dataKey: 'test'
          //   }
          // });
        });
    }
  }

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

}
