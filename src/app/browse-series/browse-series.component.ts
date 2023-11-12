import { Component } from '@angular/core';
import { SeriesService, SearchSeries } from '../services/SeriesService.service';

@Component({
  selector: 'app-browse-series',
  templateUrl: './browse-series.component.html',
  styleUrls: ['./browse-series.component.css'],
})
export class BrowseSeriesComponent {
  constructor(private seriesService: SeriesService) {}

  searchQuery: string = '';
  searchResults: SearchSeries[] = [];
  isLoading = false;
  hasError = false;

  results() {
    this.isLoading = !this.isLoading;
    this.seriesService
      .searchSeries(this.searchQuery)
      .subscribe((data: SearchSeries[]) => {
        this.searchResults = data;
        this.isLoading = !this.isLoading;
        this.hasError = this.searchResults.length === 0;
      });
  }
}
