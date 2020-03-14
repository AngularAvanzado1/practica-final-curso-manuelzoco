import { NgModule } from '@angular/core';

import { PfApiModule } from '@pf/api';
import { RegionDetailUiModule } from '@pf/region-detail/ui';

import { RegionDetailContainerComponent } from './components/region-detail-container.component';
import { RegionDetailFeatureRoutingModule } from './region-detail-feature-routing.module';

@NgModule({
  declarations: [RegionDetailContainerComponent],
  imports: [
    PfApiModule,
    RegionDetailFeatureRoutingModule,
    RegionDetailUiModule
  ],
  exports: []
})
export class RegionDetailFeatureModule {}
