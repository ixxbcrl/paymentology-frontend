import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TransactionReconcileSummaryDto } from './transaction-reconcile-summary-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

postFile(fileOne: File, fileTwo: File): Observable<TransactionReconcileSummaryDto> {
    const endpoint = 'api/transaction-reconciliation/reconcile';
    const formData: FormData = new FormData();
    formData.append("fileOne", fileOne);
    formData.append("fileTwo", fileTwo, 'fileTwo');
    console.log('test: ' + this.baseUrl + endpoint)
    
    return this.httpClient
      .post<TransactionReconcileSummaryDto>(this.baseUrl + endpoint, formData)
      .pipe(tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
      }), 
      catchError(this.handleError<any>('file upload')));
}

private handleError<T>(task = 'task', result?: T) {
  return (error: any): Observable<T> => {
    // log the error
    return of(result as T);
  };
}

}
