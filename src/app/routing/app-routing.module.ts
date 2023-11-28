import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  RouterModule,
  Routes,
  withInMemoryScrolling,
} from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { BrowseSeriesComponent } from '../pages/browse-series/browse-series.component';
import { WatchlistComponent } from '../pages/watchlist/watchlist.component';
import { ShowDetailsComponent } from '../components/show-details/show-details.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'browse', component: BrowseSeriesComponent },
  {
    path: 'watchlist',
    component: WatchlistComponent,
    canActivate: [AuthGuard],
  },
  { path: 'show/:id/:name', component: ShowDetailsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
