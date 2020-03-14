import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegionDetailContainerComponent } from './components/region-detail-container.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: RegionDetailContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class RegionDetailFeatureRoutingModule {}
