import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
// import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ContactComponent } from './contact/contact.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { TransferPointsComponent } from './transfer-points/transfer-points.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/activities',
        pathMatch: 'full',
      },
      // {
      //   path: 'home',
      //   component: HomeComponent,
      //   // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      {
        path: 'activities',
        component: EventsComponent,
      },
      {
        path: 'activities/:id',
        component: ActivityDetailComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'volunteer',
        component: VolunteerComponent,
      },
      {
        path: 'transferPoints',
        component: TransferPointsComponent,
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
