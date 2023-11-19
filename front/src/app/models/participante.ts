import { Empresa } from './empresa'; // Importe o tipo Empresa

export interface Participante {
    id: number;
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    dataRegistro: Date;
    empresas: Empresa[];
}

