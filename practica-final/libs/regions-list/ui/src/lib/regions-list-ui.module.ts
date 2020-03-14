import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { RegionsListComponent } from './components/regions-list/regions-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    RegionsListComponent,
  ],
  exports: [RegionsListComponent]
})
export class RegionsListUiModule {}
