import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { CarouselListComponent } from './dashboard/carousel-list/carousel-list.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarouselEditComponent } from './carousel-edit/carousel-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    HeaderComponent,
    CarouselListComponent,
    CarouselComponent,
    CarouselEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
