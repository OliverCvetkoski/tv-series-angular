import { Component, OnInit } from '@angular/core';

import { getSeries } from '../services/getSeries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private seriesService: getSeries) {}

  ngOnInit(): void {
    this.seriesService.getData().subscribe(
      (data) => {
        console.log('Data received:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
