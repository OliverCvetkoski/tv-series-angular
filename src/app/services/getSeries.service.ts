import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getSeries {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>('https://api.tvmaze.com/shows');
  }
}
