import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Market } from '../../state/market.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { switchMap, tap } from 'rxjs';
import {Sort} from "@angular/material/sort/sort";

@Component({
  selector: 'app-markets-table',
  templateUrl: './markets-table.component.html',
  styleUrls: ['./markets-table.component.scss'],
})
export class MarketsTableComponent implements OnInit, AfterViewInit {
  @Input() markets: Market[] = [];
  @Input() total: number = 0;
  @Input() pageIndex: number = 0;
  @Input() isLoading = true;
  @Output() paged = new EventEmitter<PageEvent>();
  @Output() sorted = new EventEmitter<Sort>();
  @Output() deleteClicked = new EventEmitter();
  displayedColumns: string[] = [
    'symbol',
    'name',
    'country',
    'createdAt',
    'manage',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.paginator?.page
      .pipe(tap((paginationData) => this.paged.emit(paginationData)))
      .subscribe();
  }
}
