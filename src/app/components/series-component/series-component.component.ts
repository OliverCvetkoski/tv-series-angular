import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Series } from 'src/app/services/SeriesService.service';
import * as WatchlistActions from '../../watchlist.actions';
import { NotificationService } from 'src/app/services/notificationService.service';

@Component({
  selector: 'app-series-component',
  templateUrl: './series-component.component.html',
  styleUrls: ['./series-component.component.css'],
})
export class SeriesComponentComponent implements OnInit {
  @Input() isRemoveButton = true;
  @Input() show: Series;
  buttonText: string;
  isButtonDisabled = false;
  showNotification = false;
  notificationContent: string;

  constructor(
    private store: Store,
    private notificationService: NotificationService
  ) {}

  getButtonText() {
    this.buttonText = this.isRemoveButton
      ? 'Remove from watchlist'
      : 'Add to watchlist';
  }

  onButtonClick(show: Series, showId: number): void {
    if (this.isRemoveButton) {
      this.store.dispatch(WatchlistActions.removeFromWatchlist({ showId }));
      this.notificationService.showNotification('Removed from Watchlist');
    } else {
      this.store.dispatch(WatchlistActions.addToWatchlist({ show }));
      this.isButtonDisabled = true;
      this.notificationService.showNotification('Added to Watchlist');
    }
  }

  ngOnInit(): void {
    this.getButtonText();
  }
}
