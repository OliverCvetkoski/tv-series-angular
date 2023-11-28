import { Component, OnInit } from '@angular/core';

import { SeriesService, Series } from '../../services/SeriesService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browse-series',
  templateUrl: './browse-series.component.html',
  styleUrls: ['./browse-series.component.css'],
})
export class BrowseSeriesComponent implements OnInit {
  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  searchQuery: string = '';
  searchResults: Series[] = [];
  isLoading = false;
  hasError = false;

  showResults() {
    this.isLoading = true;
    this.seriesService
      .searchSeries(this.searchQuery)
      .subscribe((data: Series[]) => {
        this.searchResults = data;
        this.isLoading = false;
        this.hasError = this.searchResults.length === 0;

        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { q: this.searchQuery },
          queryParamsHandling: 'merge',
        });
      });
    console.log(this.searchResults);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params['q'];
      if (query) {
        this.isLoading = true;
        this.seriesService.searchSeries(query).subscribe((data: Series[]) => {
          this.searchResults = data;
          this.isLoading = false;
          this.hasError = this.searchResults.length === 0;
        });
      } else {
        this.searchResults = [];
      }
    });
  }
}
