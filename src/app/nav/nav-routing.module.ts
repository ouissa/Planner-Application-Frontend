import { DashboardComponent } from './../dashboard/dashboard.component';
import { ProfileComponent } from './../profile/profile.component';
import { NavComponent } from './nav.component';
import { DegreePlanComponent } from './../degree-plan/degree-plan.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
        path: 'home',
        component: NavComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'degreeplan',
                component: DegreePlanComponent
            },
            // {
            //     path: 'estimation',
            //     component: EstimationComponent
            // },
            // {
            //     path: 'schedule',
            //     component: ScheduleComponent
            // },
            {
                path: 'myaccount',
                component: ProfileComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavRoutingModule { }