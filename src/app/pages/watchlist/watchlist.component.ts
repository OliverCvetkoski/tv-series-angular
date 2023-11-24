import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Series } from 'src/app/services/SeriesService.service';
import { WatchlistState } from 'src/app/watchlist.reducer';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit, OnDestroy {
  watchlistResults: Series[];
  isLoading = false;
  watchlist$: Observable<Series[]>;
  watchlistSubscription: Subscription;

  constructor(private store: Store) {
    this.watchlist$ = this.store.pipe(
      select(
        (state: { watchlist: WatchlistState }) =>
          (this.watchlistResults = state.watchlist.shows)
      )
    );
  }

  ngOnInit(): void {
    this.watchlistSubscription = this.watchlist$.subscribe((result) => {
      this.watchlistResults = result;
    });
    console.log(this.watchlistResults);
  }

  ngOnDestroy(): void {
    this.watchlistSubscription.unsubscribe();
  }
}
