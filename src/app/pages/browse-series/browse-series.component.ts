import { Component } from '@angular/core';
import { SeriesService, Series } from '../../services/SeriesService.service';
import { WatchlistService } from 'src/app/services/WatchlistService.service';

@Component({
  selector: 'app-browse-series',
  templateUrl: './browse-series.component.html',
  styleUrls: ['./browse-series.component.css'],
})
export class BrowseSeriesComponent {
  constructor(
    private seriesService: SeriesService,
    private watchlistService: WatchlistService
  ) {}

  searchQuery: string = '';
  searchResults: Series[] = [];
  isLoading = false;
  hasError = false;

  showResults() {
    this.isLoading = !this.isLoading;
    this.seriesService
      .searchSeries(this.searchQuery)
      .subscribe((data: Series[]) => {
        this.searchResults = data;
        this.isLoading = !this.isLoading;
        this.hasError = this.searchResults.length === 0;
        console.log(this.searchResults);
      });
  }

  addToWatchlist(series): void {
    this.watchlistService.addToWatchlist(series);
  }
}
