import { createAction, props } from '@ngrx/store';
import { Series } from './services/SeriesService.service';

export const addToWatchlist = createAction(
  '[Watchlist] Add To Watchlist',
  props<{ show: Series }>()
);

export const removeFromWatchlist = createAction(
  '[Watchlist] Remove From Watchlist',
  props<{ showId: number }>()
);
