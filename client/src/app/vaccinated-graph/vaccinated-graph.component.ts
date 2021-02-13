import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinated-graph',
  templateUrl: './vaccinated-graph.component.html',
  styleUrls: ['./vaccinated-graph.component.css'],
})
export class VaccinatedGraphComponent implements OnInit {
  @Input()
  view: any[];
  @Input()
  graphData: any[];
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {}

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }
}
