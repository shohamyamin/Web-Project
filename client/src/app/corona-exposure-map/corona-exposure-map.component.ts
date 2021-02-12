import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-corona-exposure-map',
  templateUrl: './corona-exposure-map.component.html',
  styleUrls: ['./corona-exposure-map.component.css'],
})
export class CoronaExposureMapComponent implements OnInit {
  url: string;
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.url =
      'https://www.arcgis.com/apps/webappviewer/index.html?id=20ded58639ff4d47a2e2e36af464c36e&locale=he';
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
