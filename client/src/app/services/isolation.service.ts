import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IIsolation } from '../models/isolation';

@Injectable({
  providedIn: 'root',
})
export class IsolationService {
  apiURL = environment;
  constructor(private http: HttpClient) {}

  submitIsolationForm(isolationData: IIsolation) {
    return this.http.post(`${this.apiURL}/isolation`, isolationData);
  }

  checkIfExist(username: string) {
    console.log('usernameservice', username);

    return this.http.post<IIsolation>(`${this.apiURL}/checkIsolation`, {
      username: username,
    });
  }
}
