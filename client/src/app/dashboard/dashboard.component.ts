import { getLocaleDateFormat } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { SeriesHorizontal } from '@swimlane/ngx-charts';

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
  isolatedDoctorsPieData: any;
  graphDataVacinated: any;
  graphDataDeadPerDay: any;
  graphPrecentOfPositiveTests: { name: string; series: any[] }[];
  vaccinatedPerAgeGraphData: any = [];
  hardCountDataGraph: any;
  view: any[] = [650, 350];
  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getSpecificData().subscribe((specificDataArray) => {
      console.log(specificDataArray);

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
      //vaccinated data
      let vacinated = specificDataArray[4].data;
      let lastVacinated = vacinated[vacinated.length - 1];
      this.specificDetailsDataArray.push({
        title: 'second dose',
        details: lastVacinated.vaccinated_seconde_dose_cum,

        newDetails: `${lastVacinated.vaccinated_seconde_dose_population_perc}% Vaccinated in second dose`,
        subDetails: `${lastVacinated.vaccinated_population_perc}% Vaccinated in the first dose`,
      });
      this.isolatedDoctorsPieData = specificDataArray[20].data.map((doctor) => {
        return { name: doctor.name, value: doctor.amount };
      });

      let totalVaccinated = { name: 'Total Vaccinated', series: [] };
      let dailyVaccinated = { name: 'Daily Vaccinated', series: [] };
      let vaccinatedInSecondeDose = {
        name: 'Vaccinated in Seconde dose',
        series: [],
      };
      vacinated.forEach((element) => {
        let date = new Date(element.Day_Date);
        totalVaccinated.series.push({
          value: element.vaccinated_cum,
          name: `${date.getDate()}/${date.getMonth() + 1}`,
        });
        dailyVaccinated.series.push({
          value: element.vaccinated,
          name: `${date.getDate()}/${date.getMonth() + 1}`,
        });
        vaccinatedInSecondeDose.series.push({
          value: element.vaccinated_seconde_dose_cum,
          name: `${date.getDate()}/${date.getMonth() + 1}`,
        });
      });
      this.graphDataVacinated = [
        totalVaccinated,
        dailyVaccinated,
        vaccinatedInSecondeDose,
      ];

      //dead per day data
      let dataDeadPerDay = specificDataArray[5].data;

      let dialyDead = { name: 'Dialy Dead', series: [] };
      dataDeadPerDay.forEach((elementDay) => {
        let date = new Date(elementDay.date);
        dialyDead.series.push({
          value: elementDay.amount,
          name: `${date.getDate()}/${date.getMonth() + 1}`,
        });
      });
      this.graphDataDeadPerDay = [dialyDead];

      //number of tests data
      let dataNumberOfTests = specificDataArray[6].data;
      let dataPercentegePositive = {
        name: 'Percentage of Positives Tests',
        series: [],
      };
      dataNumberOfTests.forEach((dayTests) => {
        let date = new Date(dayTests.date);
        dataPercentegePositive.series.push({
          value: ((dayTests.positiveAmount / dayTests.amount) * 100).toFixed(2),
          name: `${date.getDate()}/${date.getMonth() + 1}`,
        });
      });
      this.graphPrecentOfPositiveTests = [dataPercentegePositive];

      let vaccinatedPerAgeData = specificDataArray[7].data;
      let tempVaccinatedPerAgeGraphData = [];
      vaccinatedPerAgeData.forEach((age) => {
        let dataPercentegePositive = {
          name: age.age_group,
          series: [],
        };
        dataPercentegePositive.series.push({
          name: 'Presentage of First Dose',
          value: age.percent_vaccinated_first_dose,
          extra: { code: age.age_group },
        });
        dataPercentegePositive.series.push({
          name: 'Presentage of Second Dose',
          value: age.persent_vaccinated_second_dose,
          extra: { code: age.age_group },
        });

        tempVaccinatedPerAgeGraphData.push(dataPercentegePositive);
      });
      this.vaccinatedPerAgeGraphData = tempVaccinatedPerAgeGraphData;

      let hardCountData = specificDataArray[11].data;

      let numberOfHardPatiants = {
        name: 'Number Of Hard Patiants',
        series: [],
      };
      hardCountData.forEach((dateHardData) => {
        let date = new Date(dateHardData.date);
        numberOfHardPatiants.series.push({
          value: dateHardData.CountHardStatus,
          name: `${date.getDate()}/${date.getMonth() + 1}`,
        });
      });
      this.hardCountDataGraph = [numberOfHardPatiants];
    });
  }
}
