import { Injectable } from '@angular/core';
import { IngestionRequestInterface, AttributeInterface } from '../interfaces/ingestion.interface';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IngestionService {

  constructor(private httpClient: HttpClient) { }
  fetchAttributes(postData: IngestionRequestInterface): Observable<AttributeInterface> {

    let body = JSON.stringify(postData);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.httpClient.post<AttributeInterface>(`${environment.baseUrl}/DataIngestion`, body, options)
  }

  
}
