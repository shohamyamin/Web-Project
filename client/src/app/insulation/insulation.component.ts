import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { IIsolation } from '../models/isolation';
import { AuthService } from '../services/auth.service';
import { IsolationService } from '../services/isolation.service';

@Component({
  selector: 'app-insulation',
  templateUrl: './insulation.component.html',
  styleUrls: ['./insulation.component.css'],
})
export class InsulationComponent implements OnInit {
  endDate: string = '';
  constructor(
    private isolationService: IsolationService,
    private authService: AuthService
  ) {}
  isolationData: IIsolation;
  disable: boolean;
  showEndDate: boolean;
  reurnedIsolation: IIsolation;
  ngOnInit(): void {
    this.showEndDate = false;
    this.reurnedIsolation = {
      name: null,
      id: null,
      phoneNumber: null,
      startDate: null,
      email: null,
      username: this.authService.username,
      endDate: null,
    };
    console.log('use', this.authService.username);

    this.isolationService
      .checkIfExist(this.authService.username)
      .subscribe((isolationInfo) => {
        console.log('isolationInfo', isolationInfo);

        if (isolationInfo) {
          this.reurnedIsolation = isolationInfo;
          this.showEndDate = true;
          this.endDate = `${this.reurnedIsolation.endDate.toString()}`;
        }
      });

    this.isolationData = {
      name: null,
      id: null,
      phoneNumber: null,
      startDate: null,
      email: null,
      username: this.authService.username,
      endDate: null,
    };
  }

  onSubmit() {
    this.isolationService
      .submitIsolationForm(this.isolationData)
      .subscribe((res) => {
        console.log('resIsolation', res);
      });
  }
}
