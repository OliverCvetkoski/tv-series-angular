import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { BrowseSeriesComponent } from '../pages/browse-series/browse-series.component';
import { WatchlistComponent } from '../pages/watchlist/watchlist.component';
import { ShowDetailsComponent } from '../components/show-details/show-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseSeriesComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'show/:id/:name', component: ShowDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
