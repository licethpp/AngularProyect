import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { catchError, map, Observable, pipe, retry, throwError } from "rxjs";
import { Cheese } from '../models/cheese';

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



uploadImage(file: File): Observable<HttpEvent<any>> {
 
  const headers=new HttpHeaders({
    'Accept': 'application/json'

  })
  return this.http.post<any>(this.APIUrl + file,{headers:headers},);
  
}



/*upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.APIUrl}/`,file, {
    reportProgress: true,
  });

  return this.http.request(req);
}*/

  Updatecheese(data: any): Observable<any[]> {
  return this.http.post<any>(this.APIUrl  + '/update',{
      
      id: data.id,
      naam: data.naam ,
      soort:data.soort,
      smaak:data.smaak,
      price:data.price,
      pictureData:data.pictureData

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
    const url = `${this.APIUrl}/${id}`; // DELETE 
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

