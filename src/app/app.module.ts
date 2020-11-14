import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { TransferPointsComponent } from './transfer-points/transfer-points.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    EventsComponent,
    SingleEventComponent,
    ActivityDetailComponent,
    ContactComponent,
    VolunteerComponent,
    TransferPointsComponent,
    VolunteersComponent,
    VolunteerDetailComponent,
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
