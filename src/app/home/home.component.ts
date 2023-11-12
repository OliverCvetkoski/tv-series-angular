import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeriesService, Series } from '../services/SeriesService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  seriesData: Series[] = [];
  batchSize = 20;
  currentPage = 1;
  loading = false;
  initialResults = 20;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadData(): void {
    this.loading = !this.loading;
    this.dataSubscription = this.seriesService.getAllData().subscribe(
      (data: Series[]) => {
        const startIndex = (this.currentPage - 1) * this.batchSize;
        const endIndex = startIndex + this.batchSize;
        const newData = data.slice(startIndex, endIndex);

        this.seriesData = this.seriesData.concat(newData);
        this.currentPage++;
        this.initialResults += 20;
        this.loading = !this.loading;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = !this.loading;
      }
    );
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
