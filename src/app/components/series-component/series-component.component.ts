import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Series } from 'src/app/services/SeriesService.service';
import * as WatchlistActions from '../../watchlist.actions';
import { NotificationService } from 'src/app/services/notificationService.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-series-component',
  templateUrl: './series-component.component.html',
  styleUrls: ['./series-component.component.css'],
})
export class SeriesComponentComponent implements OnInit, OnDestroy {
  @Input() isRemoveButton = true;
  @Input() show: Series;
  buttonText: string;
  isButtonDisabled = false;
  showNotification = false;
  notificationContent: string;
  userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private store: Store,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {}

  getButtonText() {
    this.buttonText = this.isRemoveButton ? 'Remove' : 'Add to watchlist';
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

  private initializeButtonState(): void {
    const currentWatchlist =
      JSON.parse(localStorage.getItem('watchlist')) || [];
    const isShowInWatchlist = currentWatchlist.some(
      (item: Series) => item.id === this.show.id
    );
    this.isButtonDisabled = isShowInWatchlist;
  }

  ngOnInit(): void {
    this.getButtonText();

    if (!this.isRemoveButton) {
      this.initializeButtonState();
    }

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
