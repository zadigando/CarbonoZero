// empresa-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participante } from '../models/participante';
import { ProjetosCompensacao, ProjetosCompensacaoResponse } from '../models/projetoscompensacao';

@Injectable({
    providedIn: 'root',
})
export class EmpresaDataService {
    private apiUrl = 'https://localhost:7211'; // Replace with your actual API URL

    constructor(private http: HttpClient) { }

    getProjetos(): Observable<ProjetosCompensacaoResponse> {
        return this.http.get<ProjetosCompensacaoResponse>(`${this.apiUrl}/CarbonoZero/Listar-projetos`);
    }

    login(participanteLogin: Participante): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/CarbonoZero/login`, participanteLogin);
    }

    cadastrar(participanteCadastro: Participante): Observable<any> {
        return this.http.put(`${this.apiUrl}/CarbonoZero/Cadastro`, participanteCadastro);
    }

    criarProjeto(criarProjeto: ProjetosCompensacao): Observable<any> {
        return this.http.post(`${this.apiUrl}/CarbonoZero/Criar-projeto`, criarProjeto);
    }

    deletarProjeto(projetoId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/CarbonoZero/Deletar-projeto/${projetoId}`);
    }
}
