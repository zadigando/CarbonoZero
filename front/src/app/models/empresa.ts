import { Creditoscarbono } from './creditoscarbono';
import { Emissoes } from './emissoes';
import { Participante } from './participante';

export interface Empresa {
    id: number;
    idParticipante: number;
    nomeEmpresa: string;
    setorEmpresa: string;
    cnpj: string;
    avaliacaoEmissoes: number;
    creditosCarbono: number;
    elegibilidade: string;
    dataAvaliacaoElegibilidade: Date;
    creditoscarbonos: Creditoscarbono[];
    emissoes: Emissoes[];
    idParticipanteNavigation: Participante | null;
}
