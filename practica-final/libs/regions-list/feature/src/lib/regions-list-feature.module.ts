import { NgModule } from '@angular/core';

import { PfApiModule } from '@pf/api';
import { RegionsListUiModule } from '@pf/regions-list/ui';

import { RegionsListContainerComponent } from './components/regions-list-container.component';
import { RegionsListFeatureRoutingModule } from './regions-list-feature-routing.module';

@NgModule({
  declarations: [RegionsListContainerComponent],
  imports: [
    PfApiModule,
    RegionsListFeatureRoutingModule,
    RegionsListUiModule
  ],
  exports: []
})
export class RegionsListFeatureModule {}
