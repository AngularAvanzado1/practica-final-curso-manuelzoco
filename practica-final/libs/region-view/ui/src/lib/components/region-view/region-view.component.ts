import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

import { RegionView } from '@pf/api';

@Component({
  selector: 'pf-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RegionViewComponent {
  @Input() regions: RegionView[];
}
