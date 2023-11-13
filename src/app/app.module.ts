import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
