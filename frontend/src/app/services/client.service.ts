import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private myAppUrl: string; 
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clients/'
   }

   getListClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.myAppUrl + this.myApiUrl);
   }

   deleteClient(id:number): Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id)
   }

   saveClient(client: Client): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, client)
   }
}
