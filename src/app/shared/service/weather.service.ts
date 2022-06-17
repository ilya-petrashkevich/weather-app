import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IForecast, IToday} from "../model/weather-app.model";

const API_KEY = "2c25e3f5ceb4e5b0f8969b3ef2a5a5ab";
const API_URL = "http://api.openweathermap.org";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  @Input() valueInput!: string;
  @Input() todayWeatherInfo!: IToday[];
  @Input() lang!: string;

  constructor( private http: HttpClient ) { }

  getTodayWeatherByName(valueInput: string, lang: string ): Observable<IToday> {
    return this.http.get<IToday>(`${API_URL}/data/2.5/weather?q=${valueInput}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`)
  }
  // valueInput - значение из строки поиска, название города, страны
  getForecastWeatherByName(valueInput: string, lang: string): Observable<IForecast> {
    return this.http.get<IForecast>(`${API_URL}/data/2.5/forecast?q=${valueInput}&appid=${API_KEY}&units=metric&lang=${lang}`)

  }


}

































