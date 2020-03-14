import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegionViewContainerComponent } from './components/region-view-container.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: RegionViewContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class RegionViewFeatureRoutingModule {}
