import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionsResolver } from './resolvers/regions.resolver';
import { RegionsViewResolver } from './resolvers/regions-view.resolver';
import { RegionDetailResolver } from './resolvers/region-detail.resolver';

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
  {
    path: 'country',
    children: [
      {
        path: ':code',
        resolve: {
          region: RegionsViewResolver,
        },
        loadChildren: () =>
          import('@pf/region-view/feature').then(
            m => m.RegionViewFeatureModule
          )
      }
    ]
  },
  {
    path: 'region',
    children: [
      {
        path: ':code',
        resolve: {
          region: RegionDetailResolver,
        },
        loadChildren: () =>
          import('@pf/region-detail/feature').then(
            m => m.RegionDetailFeatureModule
          )
      }
    ]
  },
  {
    path: '**',
    resolve: {
      regions: RegionsResolver
    },
    loadChildren: () =>
      import('@pf/regions-list/feature').then(
        m => m.RegionsListFeatureModule
      )
  }
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
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
