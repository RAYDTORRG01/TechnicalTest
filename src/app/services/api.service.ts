import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_URL: string = environment.URL;

  constructor(private _httpClient: HttpClient) {}

  getItems(): Observable<any> {
    const url = `${this.API_URL}`;
    return this._httpClient.get(url);
  }
}
