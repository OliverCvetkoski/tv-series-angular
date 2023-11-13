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
  isButtonDisabled: boolean = false;

  constructor(private watchlistService: WatchlistService) {}

  getButtonText() {
    this.buttonText = this.isRemoveButton
      ? 'Remove from watchlist'
      : 'Add to watchlist';
  }

  onButtonClick(): void {
    if (this.isRemoveButton) {
      this.watchlistService.removeFromWatchlist(this.series);
    } else {
      this.watchlistService.addToWatchlist(this.series);
      this.isButtonDisabled = true;
    }
  }

  ngOnInit(): void {
    this.getButtonText();
  }
}
