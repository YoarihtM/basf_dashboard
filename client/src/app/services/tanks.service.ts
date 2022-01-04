import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tank } from '../Tank';
// import { TANKS } from '../mock-tanks';
import { MessageService } from './message.service';

// import { Hero } from './hero';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TanksService {
  
  // This is the URL of the API, it is only available once the server is up. From this address the routes are extended
  API_URI = "http://localhost:3000/api"
  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  // This is the first method of the API, it is the SELECT ALL TANKS Method
  // it returns an observable array of Tanks
  getTanks():Observable<Tank[]> {
    return this.http.get<Tank[]>(`${this.API_URI}/tanks`)
  }

  /* Here we have the second method of the API, it retrieves a single tank or row from the database,
  the ID is passed as a parameter. */
  getTank(id: string) {
    return this.http.get(`${this.API_URI}/tanks/${id}`)
  
  }

  /* This is the third method of the API, it returns the start Date of the specific row of the database,
  the ID is passed as a parameter. */
  getStartDate(id:string): Observable<any>{
    return this.http.get(`${this.API_URI}/tanks/startDate/${id}`)
  }

  /* This is the fourth and last method of the API, it retrives the deliveryDate of the row, 
  the id is passed as a parameter. */
  getDeliveryDate(id:string){
    return this.http.get(`${this.API_URI}/tanks/deliveryDate/${id}`)
  }
}
