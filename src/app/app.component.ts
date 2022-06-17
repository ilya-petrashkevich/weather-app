import {Component} from '@angular/core';
import {WeatherService} from "./shared/service/weather.service";
import {IForecast, IList, IToday} from "./shared/model/weather-app.model";
// import {
//   ForecastSelectedDialogComponent
// } from "./components/forecast-selected-dialog/forecast-selected-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "./components/error-dialog/error-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'weather-app';


  constructor( private weatherService: WeatherService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getTodayWeather();
    this.getForecastWeather();
  }

  todayWeatherInfo!: IToday;
  forecastWeatherInfo!: IForecast;
  // listWeatherInfo!: IList;


  lang: string = `en`;
  valueInput: string = "Minsk";
  error: any;

  // базовые значения для контейнеров weather-today и weather-forecast
  isTodayVisible = true;
  isForecastVisible = false;


  //==================================================================

  //переключаем видимость контейнеров weather-today и weather-forecast поочередно  (одновременнно виден только выбранный)
  showToday() {
    this.isTodayVisible = true;
    this.isForecastVisible = false;
  }

  showForecast() {
    this.isForecastVisible = true;
    this.isTodayVisible = false;
  }
  //====================================================================

  getTodayWeather(): void {
    this.weatherService.getTodayWeatherByName(this.valueInput, this.lang).subscribe(( todayInfo:IToday  ) => {
      // this.valueInput = "";
      this.todayWeatherInfo = todayInfo;
      // console.log( this.valueInput )
      console.log( this.todayWeatherInfo )
    }, (err: any) => {
      this.error = err;
      console.log( err );

      this.dialog.open(ErrorDialogComponent, {//FilmItemDialogComponent
        width: '60%',
        data: this.error
      });

    })
  }

  getForecastWeather():void {
    this.weatherService.getForecastWeatherByName( this.valueInput, this.lang ).subscribe( ( forecastInfo: IForecast  ) => {
      this.forecastWeatherInfo = forecastInfo;
      console.log( this.forecastWeatherInfo )
    })
  }

}
