import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    RegionsListComponent,
  ],
  exports: [RegionsListComponent]
})
export class RegionsListUiModule {}
