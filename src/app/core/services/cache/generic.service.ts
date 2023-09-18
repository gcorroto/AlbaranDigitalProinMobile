import { Injectable } from '@angular/core';
import { Async, EntityApi } from './../../const/types';
import { GenericService } from '../generic.service';
import { ResultSearch } from './../../dto/result.search.model';
import { Observable } from 'rxjs';
import { Formats } from './../../const/Enums';

@Injectable({
  providedIn: 'root',
})
export class GenericCacheService<T,I> implements GenericService<T,I> {
  constructor(
    private readonly service: GenericService<T,I>
  ) {
  }

  getById(id: I, ent: EntityApi): Observable<T> {
    return this.service.getById(id, ent);
  }

  getAll(ent: EntityApi, format?: Formats): Observable<T> {
    return this.service.getAll(ent, format);
  }
  postSave(id: I, t: T, ent: EntityApi, format?: Formats): Observable<T> {
    return this.service.postSave(id, t, ent, format);
  }
  postSearch(criteria: any, ent: EntityApi, format?: Formats): Observable<T> {
    return this.service.postSearch(criteria, ent, format);
  }
  putUpdate(id: I, t: T, ent: EntityApi, format?: Formats): Observable<T> {
    return this.service.putUpdate(id, t, ent, format);
  }
  patchUpdate(p: Partial<T>, ent: EntityApi, format?: Formats): Observable<T> {
    return this.service.patchUpdate(p, ent, format);
  }

}
