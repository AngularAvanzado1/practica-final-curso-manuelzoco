import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsResolver } from './resolvers/regions.resolver';

const REGIONS_ROUTES = [
  {
    path: '',
    resolve: {
      regions: RegionsResolver
    },
    loadChildren: () =>
      import('@pf/regions-list/feature').then(
        m => m.RegionsListFeatureModule
      )
  },
];

const routes: Routes = [
  {
    path: '',
    children: [
      ...REGIONS_ROUTES,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
