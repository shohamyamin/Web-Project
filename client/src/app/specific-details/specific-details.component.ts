import { Component, Input, OnInit } from '@angular/core';
import { ISpecificDetailsData } from '../models/ispecific-details-data';

@Component({
  selector: 'app-specific-details',
  templateUrl: './specific-details.component.html',
  styleUrls: ['./specific-details.component.css'],
})
export class SpecificDetailsComponent implements OnInit {
  @Input()
  specificDetailsData: ISpecificDetailsData;
  constructor() {}

  ngOnInit(): void {}
}
