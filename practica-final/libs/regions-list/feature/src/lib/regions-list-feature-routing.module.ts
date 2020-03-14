import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegionsListContainerComponent } from './components/regions-list-container.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: RegionsListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class RegionsListFeatureRoutingModule {}
