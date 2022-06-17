import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {IForecast, IList} from "../../shared/model/weather-app.model";
import {MatDialog} from "@angular/material/dialog";
import {ForecastSelectedDialogComponent} from "../forecast-selected-dialog/forecast-selected-dialog.component";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @ViewChildren( `forecast_item` ) itemsArray?: QueryList<ElementRef>// | undefined

  // protected targetClass?: any;

  @Input() forecastWeatherInfo!: IForecast;
  @Input() listWeatherInfo!: IList;

  array: any = [];
  selectedDayWeather: any = []

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {

    this.array = this.getSortedDataForFiveDays( this.forecastWeatherInfo.list );
    // console.log( this.array )
  }

  getSortedDataForFiveDays(data: any) {

    let array = [];
    array.push(data[0]);

    for (let i = 0; i < data.length; i++) {

      if (data[i].dt_txt.includes(`15:00:00`) && data[0].dt_txt.split(" ")[0] !== data[i].dt_txt.split(" ")[0]) {
        array.push(data[i]);
      }
    }

    array.length > 5 ? array.pop() : array;
    console.log( array )
    return array;
  }

  getWeatherIcon(data: string) {

    return `http://openweathermap.org/img/wn/${data}@2x.png`;
  }

  mathRoundTemp(temperature: number) {
    return Math.round( temperature );
  }

  getItemDate (item: any) {
    return item.dt_txt.split(" ")[0];
  }

  getForecastDate(item: any) {
    let forecastDateData: any;
    forecastDateData  = new Date(item.dt_txt);
    return forecastDateData.toString().split(" ");
  }

  getSelectedDayWeather( selectedDayDate: string, weatherData: any ) {

    for (let dataItem of weatherData) {

      if ( selectedDayDate === dataItem.dt_txt.split(" ")[0]) {

        this.selectedDayWeather.push(dataItem);
      }
    }
    console.log( this.selectedDayWeather )


    this.dialog.open(ForecastSelectedDialogComponent, {//FilmItemDialogComponent
      width: '100%',
      minWidth: '500px',
      data: this.selectedDayWeather
    });

    this.selectedDayWeather = [];
  }

}
