import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { AlbaranComponent } from '../component/albaran.component';
import { ItemDetailComponent } from '../component/item-detail/item-detail.component';
// import { primeraCargaAlbaranResolver } from './core/resolvers/albaran.resolver';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import {
  AlbaranMetadataInput,
  LISTADO_PROP_CLIENTE, LISTADO_PROP_TRANSPORTE, LISTADO_PROP_HORMIGON, LISTADO_PROP_METEOROLOGIA, LISTADO_PROP_HORARIO, LISTADO_PROP_RECEPCION
} from '../../../core/const/metadata/albaran';
import { EntityApiEnum, Formats } from './../../../core/const/Enums';
import { Albaran } from './../../../core/dto/albaran.model';
import { GenericCacheService } from './../../../core/services/cache/generic.service';


export const cargaAlbaranResolver: ResolveFn<any> =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(GenericCacheService<Albaran,string>).getAll(EntityApiEnum.Albaran, Formats.meta);
};

// export const cargaAlbaranMetadataResolver: ResolveFn<any> =
// (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const propiedadesAlbaran = LISTADO_PROP_CLIENTE
//                               .concat(LISTADO_PROP_TRANSPORTE)
//                               .concat(LISTADO_PROP_HORMIGON)
//                               .concat(LISTADO_PROP_METEOROLOGIA)
//                               .concat(LISTADO_PROP_HORARIO)
//                               .concat(LISTADO_PROP_RECEPCION)
//                               ;
//   const input:AlbaranMetadataInput = {entidad:'albaran' , propiedades: propiedadesAlbaran };
//   return inject(GenericCacheService<string[],string>).postSearch(input, EntityApiEnum.Metadata);
// };

const routes: Routes = [
  {
    path: 'default',
    component: AlbaranComponent,
    data: { roles: [] },
    resolve: {albaran: cargaAlbaranResolver},
   },
  { path: 'item/:id', component: ItemDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
