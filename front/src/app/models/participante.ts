import { Empresa } from './empresa'; // Importe o tipo Empresa

export class Participante {
    id?: number;
    nome?: string;
    CNPJ?: string;
    razaoSocial?: string;
    email?: string;
    senha?: string;
    telefone?: string;
    tipo?: string;
    dataRegistro?: Date;
    empresas?: Empresa[];
}

