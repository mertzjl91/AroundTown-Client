import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favorite } from '../model/favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  private favoritesURL: string;

  constructor(private http: HttpClient) {
      this.favoritesURL = 'http://localhost:8080/api/favorites';
   }

   public saveFavoriteEvent(favorite: Favorite): Observable<Favorite> {
     console.log(favorite);
    return this.http.post<Favorite>(`${this.favoritesURL}/saveFavoriteEvent`, favorite);
  }

  public deleteFavoriteEvent(eventId: number, userId: number){
    console.log(userId);
    console.log(eventId);
    return this.http.delete<Favorite>(`${this.favoritesURL}/deleteFavoriteEvent/${eventId}/${userId}`)
  }

}
