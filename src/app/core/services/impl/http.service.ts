import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formats } from '@const/Enums';
import { EntityApi } from '@const/types';
import { GenericService } from '@services/generic.service';
import { UtilService } from '@util/util.service.';
import { Observable } from 'rxjs';

export const environment = {
  production: false,
  API_SERVER: {
		BASE_URL: 'http://192.168.4.22:8080/api/v1'
	},
};

@Injectable()
export class HttpServiceImpl<T,ID> implements GenericService<T,ID> {

  private readonly url: string;

  constructor(
    private readonly http: HttpClient) {
    this.url = environment.API_SERVER.BASE_URL;
  }

  getById(id: ID, ent: EntityApi, format?: Formats): Observable<T> {
    return this.http.get<T>(`${this.url}/${ent}/${id}${UtilService.formatQueryParam(format)}`);
  }

  getAll(ent: EntityApi, format?: Formats): Observable<T> {
    return this.http.get<T>(`${this.url}/${ent}${UtilService.formatQueryParam(format)}`);
  }

  postSave(id: ID, t: T, ent: EntityApi, format?: Formats): Observable<T> {
    return this.http.post<T>(`${this.url}/${ent}${id ?`/${id}`:''}${UtilService.formatQueryParam(format)}`, t);
  }

  postSearch(criteria: any, ent: EntityApi, format?: Formats): Observable<T> {
    return this.http.post<T>(`${this.url}/${ent}${UtilService.formatQueryParam(format)}`, criteria);
  }

  putUpdate(id: ID, t: T, ent: EntityApi, format?: Formats): Observable<T> {
    return this.http.put<T>(`${this.url}/${ent}${id ?`/${id}`:''}${UtilService.formatQueryParam(format)}`, t);
  }

  patchUpdate(p: Partial<T>, ent: EntityApi, format?: Formats): Observable<T> {
    return this.http.patch<T>(`${this.url}/${ent}${UtilService.formatQueryParam(format)}`, p);
  }

}

