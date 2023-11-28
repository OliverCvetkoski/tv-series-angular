import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowseSeriesComponent } from './pages/browse-series/browse-series.component';
import { NoResultsErrorComponent } from './components/no-results-error/no-results-error.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { SeriesComponentComponent } from './components/series-component/series-component.component';
import { watchlistReducer } from './watchlist.reducer';
import { EmptyWatchlistComponent } from './components/empty-watchlist/empty-watchlist.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { LoginComponent } from './pages/login/login.component';
import { SeriesService } from './services/SeriesService.service';
import { NotificationService } from './services/notificationService.service';
import { SortElementsComponent } from './components/sort-elements/sort-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    BrowseSeriesComponent,
    NoResultsErrorComponent,
    WatchlistComponent,
    SeriesComponentComponent,
    EmptyWatchlistComponent,
    ShowDetailsComponent,
    LoginComponent,
    SortElementsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ watchlist: watchlistReducer }),
  ],
  providers: [SeriesService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
