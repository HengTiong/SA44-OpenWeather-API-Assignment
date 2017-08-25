import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription  } from 'rxjs/Subscription';
import { SearchService, WeatherData} from './SearchService';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  private searchServiceSub: Subscription;
  cities: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchServiceSub = this.searchService.citiesEmitter.subscribe((data) => {
      this.cities = data;
      console.log("cities received");
      console.log(this.cities);
    });
  }

  selectingCities(city: string) {
    this.searchService.search(city)
    console.log("selecting on " + city);
  }
}
