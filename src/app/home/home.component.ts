import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getSeries } from '../services/getSeries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  seriesData: any[] = [];
  dataSubscription: Subscription;

  constructor(private seriesService: getSeries) {}

  ngOnInit(): void {
    this.dataSubscription = this.seriesService.getData().subscribe(
      (data) => {
        this.seriesData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
