import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private baseUrl = 'http://127.0.0.1:3000';
  private http = inject(HttpClient);  
  // constructor(private http: HttpClient) {} // de esta forma se inyectaba en versiones anteriores de Angular 

  constructor() {}

  loginConNest(credenciales: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales);
  }

  registroConNest(datos: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, datos);
  }
}
