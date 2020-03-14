import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionView } from '@pf/api';

@Component({
  templateUrl: './region-detail-container.component.html',
  styleUrls: ['./region-detail-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegionDetailContainerComponent implements OnInit {
  public _region: RegionView[] = [];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._region = this._route.snapshot.data['region'];
  }
}
