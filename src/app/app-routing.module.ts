import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TransferPointsComponent } from './transfer-points/transfer-points.component';
import { PlanPagesWrapperComponent } from './plan-pages-wrapper/plan-pages-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/eatingPlaces',
        pathMatch: 'full',
      },
      // {
      //   path: 'home',
      //   component: HomeComponent,
      //   // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      {
        path: 'eatingPlaces',
        component: PlanPagesWrapperComponent,
      },
      {
        path: 'volunteering',
        component: PlanPagesWrapperComponent,
      },
      {
        path: 'detail/:id',
        component: PlanDetailComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
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
