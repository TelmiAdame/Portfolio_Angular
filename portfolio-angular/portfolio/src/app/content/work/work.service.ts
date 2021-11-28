import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from './work';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  url:string = 'http://localhost:3001/works';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Obtem todas as imagens
  getWorks(): Observable<Work[]> {
    return this.httpClient.get<Work[]>(this.url)
  }

  // Obtem uma imagem pelo id
  getWorkById(id: number): Observable<Work> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Work>(url);
  }
}