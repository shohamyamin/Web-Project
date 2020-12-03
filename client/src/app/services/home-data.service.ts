import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  constructor(private http: HttpClient) {}

  getHomeData() {
    return this.http.get<string>('localhost:3000/');
  }
}
