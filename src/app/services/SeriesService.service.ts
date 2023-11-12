import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SearchSeries {
  show: {
    id: number;
    name: string;
    image: { medium: string };
    rating: { average: number };
  };
}

export interface Series {
  id: number;
  name: string;
  image: { medium: string; original: string };
  rating: { average: number };
}

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<Series[]> {
    return this.http.get<Series[]>('https://api.tvmaze.com/shows');
  }

  searchSeries(query: string | number): Observable<SearchSeries[]> {
    return this.http.get<SearchSeries[]>(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
  }
}
