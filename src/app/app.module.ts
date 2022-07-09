import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualComponent } from './pages/individual/individual.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ButtonRAComponent } from './shared/button-ra/button-ra.component';
import { TutorialXrComponent } from './shared/tutorial-xr/tutorial-xr.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndividualComponent,
    FilterPipe,
    SearchPipe,
    ButtonRAComponent,
    TutorialXrComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

    

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
