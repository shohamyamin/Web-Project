import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISpecificDetailsData } from '../models/ispecific-details-data';
import { of, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}
  getSpecificData() {
    return this.http.get(`${environment}/getSpecificData`);

    let array: ISpecificDetailsData[] = [
      {
        title: 'seek',
        details: '1000',
        newDetails: '+50',
        subDetails: 'blalba',
      },
      {
        title: 'seek',
        details: '1000',
        newDetails: '+50',
        subDetails: 'blalba',
      },
      {
        title: 'seek',
        details: '1000',
        newDetails: '+50',
        subDetails: 'blalba',
      },
    ];
    return of(array);
  }
}
