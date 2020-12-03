import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  constructor(private http: HttpClient) {}

  getHomeData() {
    return this.http.get<string>('http://localhost:5500/home').pipe(
      map((res) => {
        return res.name;
      })
    );
  }
}
