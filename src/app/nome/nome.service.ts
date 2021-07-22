import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nome } from "./nome";

@Injectable({
  providedIn: 'root'
})
export class NomeService {

    private nomeUrl: string = `http://localhost:8080/api/nomes`;

    constructor(private httpClient: HttpClient ) { }

    listAll(): Observable<Nome[]> {
      return this.httpClient.get<Nome[]>(this.nomeUrl);
    }

    save(registro :Nome): Observable<Nome> {
        return this.httpClient.post<Nome>(`${this.nomeUrl}`, registro);
    }
}
