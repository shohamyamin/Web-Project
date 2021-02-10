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
  specificDetailsDataArray: ISpecificDetailsData[] = [];
  lastDate: string;
  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getSpecificData().subscribe((specificDataArray) => {
      this.lastDate = specificDataArray[0].data.lastUpdate;

      this.specificDetailsDataArray.push({
        title: 'Hard Patiant',
        details: specificDataArray[1].data[0].amount,

        newDetails: '',
        subDetails: `Critical ${specificDataArray[1].data[2].amount}\n Breath ${specificDataArray[1].data[2].amount}`,
      });
      this.specificDetailsDataArray.push({
        title: 'Active Patients',
        details:
          specificDataArray[2].data[0].amount +
          specificDataArray[2].data[1].amount,

        newDetails: `From Midnight: ${specificDataArray[2].data[1].amount.toString()}`,
        subDetails: `${specificDataArray[3].data[0].name}: ${specificDataArray[3].data[0].amount}
        ${specificDataArray[3].data[1].name}: ${specificDataArray[3].data[1].amount}
        ${specificDataArray[3].data[2].name}: ${specificDataArray[3].data[2].amount}`,
      });
    });
  }
}
