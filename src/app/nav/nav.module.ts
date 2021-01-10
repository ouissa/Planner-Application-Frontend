import { LoginComponent } from './../login/login.component';
import { ScheduleComponent } from './../schedule/schedule.component';
import { ProfileComponent } from './../profile/profile.component';
import { EstimationComponent } from './../estimation/estimation.component';
import { DegreePlanComponent } from './../degree-plan/degree-plan.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavRoutingModule } from './nav-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DashboardComponent,
    DegreePlanComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    FontAwesomeModule
  ]
})
export class NavModule { }
