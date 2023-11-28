import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/services/SeriesService.service';

@Component({
  selector: 'app-sort-elements',
  templateUrl: './sort-elements.component.html',
  styleUrls: ['./sort-elements.component.css'],
})
export class SortElementsComponent {
  @Input() series: Series[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  onSortChange(event: any): void {
    const sortBy = event.target.value;

    switch (sortBy) {
      case 'rating':
        this.sortByRating(this.series);
        this.updateUrlParams({ rating: sortBy });
        break;
      case 'nameAsc':
        this.sortByNameAscending(this.series);
        this.updateUrlParams({ ASC: sortBy });
        break;
      case 'nameDesc':
        this.sortByNameDescending(this.series);
        this.updateUrlParams({ DESC: sortBy });
        break;
    }
  }

  sortByGenre(event: any) {
    const sortBy = event.target.value;
    this.sort(this.series, sortBy);
  }

  sort(series: Series[], genre: any) {
    const yep = series.includes(genre);
    console.log(yep);
  }

  sortByRating(series: Series[]) {
    series.sort((a, b) => b.rating.average - a.rating.average);
  }

  sortByNameDescending(series: Series[]) {
    series.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortByNameAscending(series: Series[]) {
    series.sort((a, b) => a.name.localeCompare(b.name));
  }

  private updateUrlParams(params: any): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }
}
