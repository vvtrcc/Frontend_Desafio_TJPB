

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  private baseUrl = 'http://localhost:8080/cadastros';

  constructor(private http: HttpClient) { }

  getAllCadastros(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCadastroById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCadastro(cadastro: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cadastro);
  }

}
