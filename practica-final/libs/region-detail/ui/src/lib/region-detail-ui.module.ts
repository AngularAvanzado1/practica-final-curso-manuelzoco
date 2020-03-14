import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionDetailComponent } from './components/region-detail/region-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    RegionDetailComponent,
  ],
  exports: [RegionDetailComponent]
})
export class RegionDetailUiModule {}
