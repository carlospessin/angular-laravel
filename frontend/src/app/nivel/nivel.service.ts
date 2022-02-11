import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Nivel } from './nivel';


@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private apiURL = "http://localhost:8000/api/nivel/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Nivel[]> {
   return this.httpClient.get<Nivel[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(nivel: string): Observable<Nivel> {
   return this.httpClient.post<Nivel>(this.apiURL, JSON.stringify(nivel), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: any): Observable<Nivel> {
   return this.httpClient.get<Nivel>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id: any, nivel: string): Observable<Nivel> {
   return this.httpClient.put<Nivel>(this.apiURL + id, JSON.stringify(nivel), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: any){
   return this.httpClient.delete<Nivel>(this.apiURL + id, this.httpOptions)
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
