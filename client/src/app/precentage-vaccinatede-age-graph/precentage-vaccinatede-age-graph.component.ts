import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-precentage-vaccinatede-age-graph',
  templateUrl: './precentage-vaccinatede-age-graph.component.html',
  styleUrls: ['./precentage-vaccinatede-age-graph.component.css'],
})
export class PrecentageVaccinatedeAgeGraphComponent implements OnInit {
  @Input()
  graphData: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Age Group';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Precentage';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };
  schemeType: string = 'linear';
  constructor() {}

  ngOnInit(): void {}
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}