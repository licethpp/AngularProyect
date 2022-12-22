import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { catchError, map, Observable, pipe, retry, throwError } from "rxjs";
import { Cheese } from '../models/cheese';
=======
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, pipe, retry, throwError } from "rxjs";
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d

@Injectable({
  providedIn: 'root'
})
export class CheesesServiceService {

  APIUrl = "http://localhost:3873/kazen";

  constructor(private http: HttpClient) { }

  getAll(): Observable < any[] > {
    return this.http.get < any > (this.APIUrl);
<<<<<<< HEAD
    
=======
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
}

/*getbyID(id:any):Observable <any[]>{
  return this.http.get<any>(this.APIUrl +'/'+id)

}*/
get(id: any): Observable<any> {
  return this.http.get(`${this.APIUrl}/${id}`);
}



createCheese(data: any): Observable<any[]> {
<<<<<<< HEAD
 
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

=======
  return this.http.post<any>(this.APIUrl, data);
}

  Updatecheese(data: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl  + '/update',{
      id: data.id,
      naam: data.naam ,
      soort:data.soort,
      smaak:data.smaak
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
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
<<<<<<< HEAD
    const url = `${this.APIUrl}/${id}`; // DELETE 
=======
    const url = `${this.APIUrl}/${id}`; // DELETE api/heroes/42
>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
    return this.http.delete(url, )
     
  }
 

<<<<<<< HEAD
 
=======

>>>>>>> 8f1de1435be29af79b5349515dfe4a309b7ee56d
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

