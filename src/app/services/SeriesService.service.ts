import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Show } from '../interfaces';

export interface Series {
  id: number;
  name: string;
  image: { medium: string; original: string };
  rating: { average: number };
}

export interface SearchSeries {
  show: Series;
}

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<Series[]> {
    return this.http.get<Series[]>('https://api.tvmaze.com/shows');
  }

  getShowDetails(showId: number): Observable<Show> {
    const apiUrl = `https://api.tvmaze.com/shows/${showId}`;
    return this.http.get<Show>(apiUrl);
  }

  searchSeries(query: string | number): Observable<Series[]> {
    return this.http
      .get<SearchSeries[]>(`https://api.tvmaze.com/search/shows?q=${query}`)
      .pipe(
        map((data: SearchSeries[]) => {
          return data.map((item: SearchSeries) => {
            const { id, name, image, rating } = item.show;
            return { id, name, image, rating };
          });
        })
      );
  }
}
