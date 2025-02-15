import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {from, map, Observable} from "rxjs";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getData<T>(url: string, type: string ): Observable<T> {
    return from(this.http.get(url)).pipe(
      map( (data: any) => data[type] as T)
    );
  }
}
