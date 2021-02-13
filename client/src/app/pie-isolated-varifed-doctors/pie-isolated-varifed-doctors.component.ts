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
  @Input()
  view: any[];

  @Input()
  data: any;
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
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
