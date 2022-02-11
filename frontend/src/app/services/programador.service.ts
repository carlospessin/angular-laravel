import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Programador } from '../entities/programador';


@Injectable({
  providedIn: 'root'
})
export class ProgramadorService {

    private apiURL = "http://localhost:8000/api/programador/";

    httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
    }
  
    constructor(private httpClient: HttpClient) { }
  
    getAll(): Observable<Programador[]> {
     return this.httpClient.get<Programador[]>(this.apiURL)
     .pipe(
       catchError(this.errorHandler)
     )
   }
  
   create(nivel: string): Observable<Programador> {
     return this.httpClient.post<Programador>(this.apiURL, JSON.stringify(nivel), this.httpOptions)
     .pipe(
       catchError(this.errorHandler)
     )
   }
  
   find(id: any): Observable<Programador> {
     return this.httpClient.get<Programador>(this.apiURL + id)
     .pipe(
       catchError(this.errorHandler)
     )
   }
  
   update(id: any, nivel: string): Observable<Programador> {
     return this.httpClient.put<Programador>(this.apiURL + id, JSON.stringify(nivel), this.httpOptions)
     .pipe(
       catchError(this.errorHandler)
     )
   }
  
   delete(id: any){
     return this.httpClient.delete<Programador>(this.apiURL + id, this.httpOptions)
     .pipe(
       catchError(this.errorHandler)
     )
   }
  
   errorHandler(error: any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
   }
  
  }
  