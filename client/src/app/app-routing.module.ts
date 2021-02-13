import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoronaExposureMapComponent } from './corona-exposure-map/corona-exposure-map.component';
import { AuthGuard } from './auth.guard';
import { InsulationComponent } from './insulation/insulation.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CoronaInformationComponent } from './corona-information/corona-information.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exposureMap', component: CoronaExposureMapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'coronaInformation', component: CoronaInformationComponent },
  {
    path: 'isolation',
    canActivate: [AuthGuard],
    component: InsulationComponent,
  },
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
