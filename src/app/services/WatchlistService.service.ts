import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistSubject = new BehaviorSubject<any[]>([]);
  watchlistSeries = this.watchlistSubject.asObservable();

  addToWatchlist(series): void {
    // Retrieve the existing watchlist from local storage
    const storedData = localStorage.getItem('watchlistResults');
    const currentWatchlist = storedData ? JSON.parse(storedData) : [];

    // Check if the series is already in the watchlist
    const isSeriesInWatchlist = currentWatchlist.some(
      (item) => item.id === series.id
    );

    if (!isSeriesInWatchlist) {
      // If the series is not in the watchlist, add it
      const updatedWatchlist = [...currentWatchlist, series];
      this.watchlistSubject.next(updatedWatchlist);

      // Store the updated watchlist back in local storage
      localStorage.setItem(
        'watchlistResults',
        JSON.stringify(updatedWatchlist)
      );
    } else {
      // If the series is already in the watchlist, handle accordingly (e.g., display a message)
      console.log('Series is already in the watchlist');
    }
  }
}
