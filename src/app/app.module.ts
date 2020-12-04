import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { TransferPointsComponent } from './transfer-points/transfer-points.component';
import { ItemFiltersComponent } from './item-filters/item-filters.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { SinglePlanComponent } from './single-plan/single-plan.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { PlanPagesWrapperComponent } from './plan-pages-wrapper/plan-pages-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactComponent,
    TransferPointsComponent,
    ItemFiltersComponent,
    PlanListComponent,
    SinglePlanComponent,
    PlanDetailComponent,
    PlanPagesWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
