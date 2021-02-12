import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoronaExposureMapComponent } from './corona-exposure-map/corona-exposure-map.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exposureMap', component: CoronaExposureMapComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [RouterModule, MatDialogModule],
})
export class AppRoutingModule {}
