import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherInputComponent } from './weather-input.component';
import { WeatherDetailComponent } from './weather-detail.component';

import { SearchService } from './SearchService';
import { WeatherListComponent } from './weather-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInputComponent,
    WeatherDetailComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
