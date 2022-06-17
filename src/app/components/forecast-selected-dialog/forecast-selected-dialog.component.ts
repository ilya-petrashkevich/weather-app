import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IList} from "../../shared/model/weather-app.model";

@Component({
  selector: 'app-forecast-selected-dialog',
  templateUrl: './forecast-selected-dialog.component.html',
  styleUrls: ['./forecast-selected-dialog.component.scss']
})
export class ForecastSelectedDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ForecastSelectedDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: IList[] ) { }

  ngOnInit(): void {
  }

  //дата в текстовом виде преобразуем через new Date и разбивается split() - ом и выводится уже в html уже так часть что надо
  //!!!!!!==>>  вставлять в функцию getForecastDateData() элемент массива сразу с ссылкой на текстовую дату ( arrayItem.dt_txt )
  getForecastDateData( arrayItemTxtDate: string ) {
    /* идет преобразование в ( Mon Apr 25 2022 15:00:00 GMT+0300 (Москва, стандартное время) ) и делаем это c помощью функции getString() !!!строкой!!!,
     а первоначально входит так "2022-04-24 15:00:00" , но как оказалось разделять их большого смысла нет*/
    let forecastDateData = new Date(arrayItemTxtDate);

    let forecastDateResult = forecastDateData.toString().split(" ");

    return forecastDateResult;
  }

  getWeatherIcon(data: string) {

    return `http://openweathermap.org/img/wn/${data}@2x.png`;
  }

  mathRoundTemp(temperature: number) {
    return Math.round( temperature );
  }

}
