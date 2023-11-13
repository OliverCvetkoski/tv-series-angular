import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistSubject = new BehaviorSubject<any[]>([]);
  watchlistSeries = this.watchlistSubject.asObservable();

  addToWatchlist(series): void {
    const storedData = localStorage.getItem('watchlistResults');
    const currentWatchlist = storedData ? JSON.parse(storedData) : [];

    const isSeriesInWatchlist = currentWatchlist.some(
      (item) => item.id === series.id
    );

    if (!isSeriesInWatchlist) {
      const updatedWatchlist = [...currentWatchlist, series];
      this.updateWatchlist(updatedWatchlist);
    }
  }

  removeFromWatchlist(series): void {
    const storedData = localStorage.getItem('watchlistResults');
    const currentWatchlist = storedData ? JSON.parse(storedData) : [];

    const updatedWatchlist = currentWatchlist.filter(
      (item) => item.id !== series.id
    );

    this.updateWatchlist(updatedWatchlist);
  }

  private updateWatchlist(updatedWatchlist: any[]): void {
    this.watchlistSubject.next(updatedWatchlist);
    localStorage.setItem('watchlistResults', JSON.stringify(updatedWatchlist));
  }
}
