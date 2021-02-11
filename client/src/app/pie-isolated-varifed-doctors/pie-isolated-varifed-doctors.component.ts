import { Component, Input, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-pie-isolated-varifed-doctors',
  templateUrl: './pie-isolated-varifed-doctors.component.html',
  styleUrls: ['./pie-isolated-varifed-doctors.component.css'],
})
export class PieIsolatedVarifedDoctorsComponent implements OnInit {
  single: any[];
  view: any[] = [850, 550];

  @Input()
  data: any;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

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
