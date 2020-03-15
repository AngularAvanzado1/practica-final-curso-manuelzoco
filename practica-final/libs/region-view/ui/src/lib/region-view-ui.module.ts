import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { RegionViewComponent } from './components/region-view/region-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    RegionViewComponent,
  ],
  exports: [RegionViewComponent]
})
export class RegionViewUiModule {}
