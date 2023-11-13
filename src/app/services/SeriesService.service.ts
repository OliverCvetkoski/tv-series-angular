import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  searchSeries(query: string | number): Observable<Series[]> {
    return this.http
      .get<SearchSeries[]>(`https://api.tvmaze.com/search/shows?q=${query}`)
      .pipe(
        map((data: SearchSeries[]) => {
          // Transform each item in the array
          return data.map((item: SearchSeries) => {
            // Extract properties from the 'show' object
            const { id, name, image, rating } = item.show;

            // Return a new object with extracted properties
            return { id, name, image, rating };
          });
        })
      );
  }
}
