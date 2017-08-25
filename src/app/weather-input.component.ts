import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {SearchService} from './SearchService';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})
export class WeatherInputComponent implements OnInit {

  @ViewChild('queryForm') queryForm: NgForm;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  processForm() {
    const query = this.queryForm.value.query;
    console.log('processing form: ', query);
    // this.searchService.queryEvent.emit(query);
    this.searchService.addCity(query);
    this.clearForm();
  }

  clearForm() {
    this.queryForm.resetForm();
  }
}
