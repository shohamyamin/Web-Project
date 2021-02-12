import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona-stats',
  templateUrl: './corona-stats.component.html',
  styleUrls: ['./corona-stats.component.css'],
})
export class CoronaStatsComponent implements OnInit {
  @Input()
  view: any[];
  view2: any[];
  @Input()
  graphData: any[];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  cardColor: string = '#232837';
  constructor() {}

  ngOnInit(): void {
    this.view2 = [this.view[0] * 2, this.view[1]];
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
