import { Injectable } from '@angular/core';
import { Plat } from '../app/models/plat';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatServiceService {

  constructor(private http: HttpClient) { }

    // Méthode pour ajouter des plats en base
    addPlat(plat: Plat): Observable<Plat> {
        const url = 'https://cantiniere-e685c.firebaseio.com/cantiniere-e685c.json';
        return this.http.post<Plat>(url, plat, {responseType: 'json'}).pipe(
            tap((product: Plat) => console.log('plat ajouté')),
            catchError(this.handleError<Plat>('addPlat')));
    }
    // Récupération de tous les plats en base
    getPlat(): Observable<Plat[]> {
        return this.http.get<Plat[]>
        ('https://cantiniere-e685c.firebaseio.com/cantiniere-e685c.json')
            .pipe(
                tap(data => data),
                catchError(this.handleError('getPlat', []))
            );
    }
    // Modification d'un plat depuis un formulaire
    editPlat(plat: Plat, key: string): Observable<Plat> {
        const url = `https://cantiniere-e685c.firebaseio.com/cantiniere-e685c/` + key + '.json';
        console.log(url);
        return this.http.put<Plat>(url, plat, {responseType: 'json'}).pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError<Plat>('editPlat')));
    }
    // Récupération d'un plat depuis une 'key'
    getPlatByKey(key: string): Observable<Plat[]> {
        return this.http.get<Plat[]>(`https://cantiniere-e685c.firebaseio.com/cantiniere-e685c/` + key + '.json')
            .pipe(
                tap(data => JSON.stringify(data)),
                catchError(this.handleError('getPlatByKey', []))
            );
}
    //Suppression du plat par sa key
    deletePlat(key: string): Observable<Plat[]> {
      const url = `https://cantiniere-e685c.firebaseio.com/cantiniere-e685c/` + key + '.json';
      this.http.delete<Plat[]>(url)
      .pipe(
        tap(data => data),
        catchError(this.handleError('deletePlat'))
    );
    console.log(key);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return (error);
        };
    }
}
