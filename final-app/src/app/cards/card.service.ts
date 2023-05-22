import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class CardService {
cardUrl: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.cardUrl);
  }

  

 
}
