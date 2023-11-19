// empresa-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresaDataService {
  private apiUrl = 'https://localhost:7211'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  postLogin(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CarbonoZero/login`, user);
  }

  cadastrar(empresa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/CarbonoZero/Cadastro`, empresa);
  }
  
  criarProjeto(projeto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CarbonoZero/Criar-projeto`, projeto);
  }

  deletarProjeto(projetoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/CarbonoZero/Deletar-projeto/${projetoId}`);
  }
}
