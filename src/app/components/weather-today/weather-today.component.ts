import {Component, Input, OnInit} from '@angular/core';
import {IToday} from "../../shared/model/weather-app.model";
// import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  // day: number = 0;

  @Input() todayWeatherInfo!: IToday;

  constructor() { }

  ngOnInit(): void {
  }

  todayDate(date: number) {
    let day: number = new Date(date * 1000).getDate();
    let month = new Date(date * 1000).getMonth() + 1;
    let year = new Date(date * 1000).getFullYear();

    let doubleDay = (day < 10) ? `0${day}` : day;
    let doubleMonth = (month < 10) ? `0${month}` : month;


    return `${(day< 10) ? doubleDay : day}.${(month < 10) ? doubleMonth : month}.${year}`;

  }

  getWeatherIcon(data: string) {

    return `http://openweathermap.org/img/wn/${data}@2x.png`;
  }

  mathRoundTemp(temperature: number) {
    return Math.round( temperature );
  }

  todaySunrise(sunrise: number) {
    let hoursSunrise = new Date(sunrise * 1000).getHours();
    let minutesSunrise = new Date(sunrise * 1000).getMinutes();

    let doubleHoursSunrise = (hoursSunrise < 10) ? `0${hoursSunrise}` : hoursSunrise;
    let dobleMinutesSunrise = (minutesSunrise < 10) ? `0${minutesSunrise}` : minutesSunrise;

    return `${(hoursSunrise < 10 ) ? doubleHoursSunrise : hoursSunrise }:${( minutesSunrise < 10 ) ? dobleMinutesSunrise : minutesSunrise }`;
  }

  todaySunset(sunset: number) {
    let hoursSunset = new Date(sunset * 1000).getHours();
    let minutesSunset = new Date(sunset * 1000).getMinutes();

    let doubleHoursSunset = (hoursSunset < 10) ? `0${hoursSunset}` : hoursSunset;

    let doubleMinutesSunset = (minutesSunset < 10) ? `0${minutesSunset}` : minutesSunset;

    return `${( hoursSunset < 10 ) ? doubleHoursSunset : hoursSunset}:${( minutesSunset < 10 ) ? doubleMinutesSunset : minutesSunset}`;
  }

  todayDuration(sunset: number, sunrise: number) {
    let hoursDuration = Math.trunc((sunset - sunrise) / 3600);
    let minutesDuration = Math.round((((sunset - sunrise) / 3600) - hoursDuration) * 60);

    let doubleMinutesDuration = (minutesDuration < 10) ? `0${minutesDuration}` : minutesDuration;

    return `${hoursDuration}:${ (minutesDuration < 10 ) ? doubleMinutesDuration : minutesDuration}`;
  }

}
