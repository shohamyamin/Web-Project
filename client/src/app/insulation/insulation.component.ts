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
  constructor(
    private isolationService: IsolationService,
    private authService: AuthService
  ) {}
  isolationData: IIsolation;
  disable: boolean;
  ngOnInit(): void {
    this.isolationData = {
      name: null,
      id: null,
      phoneNumber: null,
      startDate: null,
      email: null,
      username: this.authService.username,
    };
  }

  onSubmit() {
    this.isolationService.submitIsolationForm(this.isolationData);
  }
}
