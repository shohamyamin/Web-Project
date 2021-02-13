import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { SpecificDetailsComponent } from './specific-details/specific-details.component';
import { MatCardModule } from '@angular/material/card';
import { PieIsolatedVarifedDoctorsComponent } from './pie-isolated-varifed-doctors/pie-isolated-varifed-doctors.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VaccinatedGraphComponent } from './vaccinated-graph/vaccinated-graph.component';
import { DeadGraphComponent } from './dead-graph/dead-graph.component';
import { PositivePrecentageTestsGraphComponent } from './positive-precentage-tests-graph/positive-precentage-tests-graph.component';
import { PrecentageVaccinatedeAgeGraphComponent } from './precentage-vaccinatede-age-graph/precentage-vaccinatede-age-graph.component';
import { HardCountGraphComponent } from './hard-count-graph/hard-count-graph.component';
import { CoronaExposureMapComponent } from './corona-exposure-map/corona-exposure-map.component';
import { CoronaStatsComponent } from './corona-stats/corona-stats.component';
import { LoginComponent } from './login/login.component';
import { InsulationComponent } from './insulation/insulation.component';
import { RegistrationComponent } from './registration/registration.component';
import { CoronaInformationComponent } from './corona-information/corona-information.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpecificDetailsComponent,
    PieIsolatedVarifedDoctorsComponent,
    VaccinatedGraphComponent,
    DeadGraphComponent,
    PositivePrecentageTestsGraphComponent,
    PrecentageVaccinatedeAgeGraphComponent,
    HardCountGraphComponent,
    CoronaExposureMapComponent,
    CoronaStatsComponent,
    LoginComponent,
    InsulationComponent,
    RegistrationComponent,
    CoronaInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
