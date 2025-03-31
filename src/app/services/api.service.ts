import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:7071/api';

  constructor(private http: HttpClient) {}

  cadastrar(dados: { parcelas: number; valor: number }): Observable<any> {
    return this.http.post(`${this.baseUrl}/cadastro`, dados);
  }

  consultar(numero: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/consulta/${numero}`);
  }
}
