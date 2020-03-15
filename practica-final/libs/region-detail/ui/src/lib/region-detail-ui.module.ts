import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { RegionDetailComponent } from './components/region-detail/region-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    RegionDetailComponent,
  ],
  exports: [RegionDetailComponent]
})
export class RegionDetailUiModule {}
