import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Region } from '@pf/api';

@Component({
  templateUrl: './regions-list-container.component.html',
  styleUrls: ['./regions-list-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegionsListContainerComponent implements OnInit {
  public _allRegions: Region[] = [];
  public _regions: Region[] = [];

  constructor(private _route: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this._allRegions = this._route.snapshot.data['regions'];
    this._allRegions.forEach(region => {
      if (region.id !== '') {
        this._regions.push(region);
      }
    });
  }
}
