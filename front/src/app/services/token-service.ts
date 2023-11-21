import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearToken(): void {
    this.token = null;
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
