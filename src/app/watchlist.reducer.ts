import { createReducer, on } from '@ngrx/store';
import * as WatchlistActions from './watchlist.actions';
import { Series } from './services/SeriesService.service';

export interface WatchlistState {
  shows: Series[];
}

export const initialState: WatchlistState = {
  shows: [],
};

export const watchlistReducer = createReducer(
  initialState,
  on(WatchlistActions.addToWatchlist, (state, { show }) => {
    return { ...state, shows: [...state.shows, show] };
  }),
  on(WatchlistActions.removeFromWatchlist, (state, { showId }) => {
    return {
      ...state,
      shows: state.shows.filter((show) => show.id !== showId),
    };
  })
);
