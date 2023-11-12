import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowseSeriesComponent } from './browse-series/browse-series.component';
import { NoResultsErrorComponent } from './components/no-results-error/no-results-error.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    BrowseSeriesComponent,
    NoResultsErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
