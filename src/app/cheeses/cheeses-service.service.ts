import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, pipe, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheesesServiceService {

  APIUrl = "http://localhost:3873/kazen";

  constructor(private http: HttpClient) { }

  getAll(): Observable < any[] > {
    return this.http.get < any > (this.APIUrl);
}

/*getbyID(id:any):Observable <any[]>{
  return this.http.get<any>(this.APIUrl +'/'+id)

}*/
get(id: any): Observable<any> {
  return this.http.get(`${this.APIUrl}/${id}`);
}



createCheese(data: any): Observable<any[]> {
  return this.http.post<any>(this.APIUrl, data);
}

  Updatecheese(data: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl  + '/update',{
      id: data.id,
      naam: data.naam ,
      soort:data.soort,
      smaak:data.smaak
    })
  }

  updateC(id: any): Observable<any> {
    return this.http
      .post<any>(
        this.APIUrl + '/update/' + id,
        JSON.stringify(id),
        
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  deletecheese(id: number): Observable<unknown> {
    const url = `${this.APIUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, )
     
  }
 


    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        'Something bad happened; please try again later.');
    };
  
}

