import { Empresa } from './empresa';

export interface Creditoscarbono {
    id: number;
    idEmpresa: number | null;
    quantidadeCreditos: number | null;
    dataTransacao: Date | null;
    tipoTransacao: string | null;
    idEmpresaNavigation: Empresa | null;
}
