import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { SeriesService, Series } from '../../services/SeriesService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  seriesData: Series[] = [];
  batchSize = 35;
  loading = false;
  currentBatch = 0;
  totalSeriesData: Series[] = [];

  constructor(
    private seriesService: SeriesService,
    private cdr: ChangeDetectorRef
  ) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadData(): void {
    this.loading = true;
    this.dataSubscription = this.seriesService.getAllData().subscribe(
      (data: Series[]) => {
        this.totalSeriesData = data;
        this.appendNextBatch();
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = true;
      }
    );
  }

  appendNextBatch(): void {
    const start = this.currentBatch * this.batchSize;
    const end = (this.currentBatch + 1) * this.batchSize;
    const newData = this.totalSeriesData.slice(start, end);
    this.seriesData = this.seriesData.concat(newData);
    this.currentBatch++;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    if (
      scrollPosition >= documentHeight - 200 &&
      !this.loading &&
      this.seriesData.length < this.totalSeriesData.length
    ) {
      this.appendNextBatch();
    }
  }

  sortByRating() {
    this.seriesData.sort((a, b) => b.rating.average - a.rating.average);
  }

  sortByNameDescending() {
    this.seriesData.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortByNameAscending() {
    this.seriesData.sort((a, b) => a.name.localeCompare(b.name));
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
