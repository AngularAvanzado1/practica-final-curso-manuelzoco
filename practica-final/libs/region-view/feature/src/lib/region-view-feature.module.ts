import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PfApiModule } from '@pf/api';
import { RegionViewUiModule } from '@pf/region-view/ui';

import { RegionViewContainerComponent } from './components/region-view-container.component';
import { RegionViewFeatureRoutingModule } from './region-view-feature-routing.module';

@NgModule({
  declarations: [RegionViewContainerComponent],
  imports: [
    PfApiModule,
    RegionViewFeatureRoutingModule,
    RegionViewUiModule,
    TranslateModule
  ],
  exports: []
})
export class RegionViewFeatureModule {}
