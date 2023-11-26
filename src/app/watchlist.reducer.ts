import { createReducer, on } from '@ngrx/store';
import * as WatchlistActions from './watchlist.actions';
import { Series } from './services/SeriesService.service';

export interface WatchlistState {
  shows: Series[];
}

const initialState = {
  shows: JSON.parse(localStorage.getItem('watchlist')) || [],
};

export const watchlistReducer = createReducer(
  initialState,
  on(WatchlistActions.addToWatchlist, (state, { show }) => {
    const updatedWatchlist = [...state.shows, show];
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    return { ...state, shows: updatedWatchlist };
  }),
  on(WatchlistActions.removeFromWatchlist, (state, { showId }) => {
    const updatedWatchlist = state.shows.filter(
      (show: Series) => show.id !== showId
    );
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    return { ...state, shows: updatedWatchlist };
  })
);
