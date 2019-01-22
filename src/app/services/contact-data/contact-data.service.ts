import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private http: HttpClient) { }

  /**
   * This service is used to fetch data from json stored in assets folder
   */
  public getJSON(): Observable<any> {
    return this.http.get('./assets/contactdata.json');
  }
}
