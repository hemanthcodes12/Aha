import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestreleases } from '../models/latestreleases';

@Injectable({
  providedIn: 'root'
})
export class LatestreleasesService {
private baseUrl = "";

  constructor(private http: HttpClient) { }
  onsubmit():Observable<Latestreleases[]> {
  return this.http.get<Latestreleases[]>(this.baseUrl);
  }
}
