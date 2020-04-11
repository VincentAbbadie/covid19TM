import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private httpClient: HttpClient) { }

  getJoueurs(): Observable<any> {
    return this.httpClient.get('./assets/joueurs.json');
  }
}
