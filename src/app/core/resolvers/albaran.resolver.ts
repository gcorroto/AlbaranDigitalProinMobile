import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { EntityApiEnum } from './../../core/const/Enums';
import { Albaran } from './../../core/dto/albaran.model';
import { GenericCacheService } from './../../core/services/cache/generic.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class PrimeraCargaAlbaranResolver implements Resolve<Albaran> {


//     constructor(
//         private readonly serviceAlbaran: GenericCacheService<Albaran,string>,
//         private readonly log: GenericCacheService<Log,string>,
//     ) { }

//     resolve(route: ActivatedRouteSnapshot): Observable<Albaran> {
//       // request param ???
//       // const clientId: string = route.paramMap.get('clientId');

//         return new Observable<Albaran>((observ) => {
//           console.debug(`realizamos primera carga albaran`);
//           this.serviceAlbaran.getAll(EntityApiEnum.Albaran)
//           .subscribe(observ);
//         });
//     }
// }

export const primeraCargaAlbaranResolver: ResolveFn<any> =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(GenericCacheService<Albaran,string>).getAll(EntityApiEnum.Albaran);
};
