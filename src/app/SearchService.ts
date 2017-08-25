import {Http} from '@angular/http';

import {EventEmitter, Injectable, OnInit} from '@angular/core';

export interface WeatherData {
  main: string;
  description: string;
  imageUrl: string;
}

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  private static APIKEY = 'b4505f2d2baf06b30bed025408315f22';

  public weatherEmitter: EventEmitter<WeatherData []> = new EventEmitter();
  public citiesEmitter: EventEmitter<String []> = new EventEmitter();
  public cityEmitter: EventEmitter<string> = new EventEmitter();
  public cities: string[] = [];

  addCity(city: string) {
    this.cities.push(city);
    this.citiesEmitter.emit(this.cities);
  }

  search(address: string) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?id=\n', {
      params: {
        q: address,
        APPID: SearchService.APIKEY
      }
    }).subscribe((result) => {
          console.log('result on return');
          console.log(result);
          const data = result.json();
          const weather = data.weather;
          const weatherResult: WeatherData[] = [];

          weather.forEach((obj) => {
            var url = "http://openweathermap.org/img/w/" + obj.icon + ".png"
            const weat: WeatherData = {
              main: obj.main,
              description: obj.description,
              imageUrl: url
            };
            weatherResult.push(weat);
          });

          console.log(weatherResult);

          this.weatherEmitter.emit(weatherResult);
          this.cityEmitter.emit(address);
        },
        (error) => {
          console.log('result errorr...');
        });
  }
}
