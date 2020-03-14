import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionView } from '@pf/api';

@Component({
  templateUrl: './region-view-container.component.html',
  styleUrls: ['./region-view-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegionViewContainerComponent implements OnInit {
  public _regions: RegionView[] = [];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._regions = this._route.snapshot.data['region'];
  }
}
