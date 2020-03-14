import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from '@pf/api';

@Component({
  templateUrl: './regions-list-container.component.html',
  styleUrls: ['./regions-list-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegionsListContainerComponent implements OnInit {
  public _regions: Region[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._regions = this._route.snapshot.data['regions'];
  }
}
