import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/services/SeriesService.service';
import { WatchlistService } from 'src/app/services/WatchlistService.service';

@Component({
  selector: 'app-series-component',
  templateUrl: './series-component.component.html',
  styleUrls: ['./series-component.component.css'],
})
export class SeriesComponentComponent implements OnInit {
  @Input() series: Series;
  @Input() isRemoveButton = true;
  buttonText: string;
  constructor(private watchlistService: WatchlistService) {}

  getButtonText() {
    this.buttonText = this.isRemoveButton
      ? 'Remove from watchlist'
      : 'Add to watchlist';
  }

  onButtonClick(): void {
    if (this.isRemoveButton) {
      // Remove logic
    } else {
      this.watchlistService.addToWatchlist(this.series);
    }
  }

  ngOnInit(): void {
    this.getButtonText();
  }
}
