import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trajectory } from './trajectory';

@Injectable({
  providedIn: 'root',
})

export class TrajectoryService {

  url = 'http://localhost:3001/trajectorys';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Obtem todas as trajetórias
  getTrajectorys(): Observable<Trajectory[]> {
    return this.httpClient
      .get<Trajectory[]>(this.url)
  }

  // Obtem uma trajetória pelo id
  getTrajectoryById(id: number): Observable<Trajectory> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Trajectory>(url);

  }

}