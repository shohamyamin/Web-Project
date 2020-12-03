import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../services/home-data.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  val: string;
  constructor(private homeDataService: HomeDataService) {}

  ngOnInit(): void {
    this.homeDataService.getHomeData().subscribe((data) => {
      this.val = data.name;
    });
  }

  buttonClicked() {
    this.val = 'bla';
  }
}
