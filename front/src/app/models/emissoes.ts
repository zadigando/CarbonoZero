import { Empresa } from './empresa';

export class Emissoes {
  id?: number;
  idEmpresa?: number | null;
  dataAvaliacao?: Date | null;
  resultadosAvaliacao?: string | null;
  idEmpresaNavigation?: Empresa | null;
}
