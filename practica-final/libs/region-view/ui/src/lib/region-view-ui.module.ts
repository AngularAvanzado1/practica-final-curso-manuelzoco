import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionViewComponent } from './components/region-view/region-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    RegionViewComponent,
  ],
  exports: [RegionViewComponent]
})
export class RegionViewUiModule {}
