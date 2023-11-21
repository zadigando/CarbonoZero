// auth-service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenStorageService } from './token-service';
import { Participante } from '../models/participante';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7211';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {
    this.checkToken();
  }

  login(participanteLogin: Participante): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/CarbonoZero/login`,
      participanteLogin
    );
  }

  isLoggedIn(): boolean {
    // Lógica para verificar se o usuário está autenticado e atualizar this.loggedIn
    // Por exemplo, se o token estiver presente, defina como true, caso contrário, false
    const token = localStorage.getItem('token'); // Exemplo de como verificar um token
    console.log(token);
    console.log(this.tokenStorageService.getToken);
    const isAuthenticated = !!token; // Verifica se o token existe

    this.loggedIn.next(isAuthenticated); // Atualiza o BehaviorSubject com o novo valor

    return isAuthenticated; // Retorna o estado de autenticação
  }

  setToken(token: string) {
    this.tokenStorageService.saveToken(token);
    this.loggedIn.next(true);
  }

  private checkToken() {
    const token = this.tokenStorageService.getToken();
    if (token) {
      this.loggedIn.next(true);
    }
  }
}
