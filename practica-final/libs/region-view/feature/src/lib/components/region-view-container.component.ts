import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RegionView } from '@pf/api';

@Component({
  templateUrl: './region-view-container.component.html',
  styleUrls: ['./region-view-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegionViewContainerComponent implements OnInit {
  public _regions: RegionView[] = [];

  constructor(private _route: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this._regions = this._route.snapshot.data['region'];
  }
}
