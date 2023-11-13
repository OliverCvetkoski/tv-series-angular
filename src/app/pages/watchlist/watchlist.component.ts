import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Series } from 'src/app/services/SeriesService.service';
import { WatchlistService } from 'src/app/services/WatchlistService.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  watchlistResults: Series[] = [];
  isLoading = false;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.isLoading = !this.isLoading;

    const storedData = localStorage.getItem('watchlistResults');
    if (storedData) {
      this.watchlistResults = JSON.parse(storedData);
      this.isLoading = !this.isLoading;
    }
  }
}
