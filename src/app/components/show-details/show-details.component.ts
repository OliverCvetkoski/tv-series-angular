import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/SeriesService.service';
import { Show } from 'src/app/interfaces';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent implements OnInit {
  showId: number;
  showName: string;
  showDetails: Show;
  sanitizedDescription: string | null;

  constructor(
    private route: ActivatedRoute,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.showId = +params['id'];
      this.showName = params['name'];
      this.seriesService
        .getShowDetails(this.showId)
        .subscribe((details: Show) => {
          this.showDetails = details;
          if (details.summary === null) {
            this.sanitizedDescription = 'No summary available.';
          } else {
            this.sanitizedDescription = this.stripHtmlTags(
              this.showDetails?.summary
            );
          }
        });
    });
  }

  private stripHtmlTags(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
}
