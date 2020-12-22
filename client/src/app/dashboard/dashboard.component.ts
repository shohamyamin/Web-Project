import { Component, Injectable, OnInit } from '@angular/core';
import { ISpecificDetailsData } from '../models/ispecific-details-data';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Injectable()
  headline: string;
  specificDetailsDataArray: ISpecificDetailsData[];
  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getSpecificData().subscribe((specificDataArray) => {
      this.specificDetailsDataArray = specificDataArray;
    });
  }
}
