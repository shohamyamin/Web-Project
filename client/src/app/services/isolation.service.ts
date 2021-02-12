import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIsolation } from '../models/isolation';

@Injectable({
  providedIn: 'root',
})
export class IsolationService {
  apiURL = 'http://localhost:5500';
  constructor(private http: HttpClient) {}

  submitIsolationForm(isolationData: IIsolation) {
    return this.http.post(`${this.apiURL}/isolation`, isolationData);
  }
}
