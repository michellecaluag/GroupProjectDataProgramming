import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  chartData: any;

  constructor(private http: HttpClient) {  }
  
  initializeData(){
    this.http.get("https://open.er-api.com/v6/latest/USD").subscribe(
      (data:any) => {
        this.transformData(data);
      }
    );

    //
  }

  private transformData(apiData: any) {
    const categories: Array<string> = [];
    const data: Array<number> = [];
    for (const key in apiData.rates) {
      categories.push(key);
      data.push(apiData.rates[key as keyof object]);
    }
    console.log(
      {
        categories,
        data
      }
    );
      
  }
}
