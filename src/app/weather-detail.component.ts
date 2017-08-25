import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription  } from 'rxjs/Subscription';
import { SearchService, WeatherData} from './SearchService';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit, OnDestroy {

  private searchServiceSub: Subscription;
  weatherData: WeatherData[] = [];
  city: string = "";

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchServiceSub =  this.searchService.weatherEmitter.subscribe((data) => {
      this.weatherData = data;
      console.log('search received');
      console.log(this.weatherData);
    });
    this.searchServiceSub = this.searchService.cityEmitter.subscribe((data) => {
      this.city = data;
    })
  }

  ngOnDestroy() {
    this.searchServiceSub.unsubscribe();
  }

}
