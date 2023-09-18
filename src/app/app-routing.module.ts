// import { primeraCargaAlbaranResolver } from './core/resolvers/albaran.resolver';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/(homeTab:albaran/default//browseTab:browse/default//searchTab:search/default)',
    pathMatch: 'full',
  },

  {
    path: 'albaran',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/page/albaran/albaran.module').then((m) => m.AlbaranModule),
    outlet: 'homeTab',
  },
  {
    path: 'browse',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
    outlet: 'browseTab',
  },
  {
    path: 'search',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
    outlet: 'searchTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
