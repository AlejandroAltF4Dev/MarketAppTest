import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.scss'],
})
export class DetailsItemComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
