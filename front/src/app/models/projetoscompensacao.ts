export class ProjetosCompensacaoResponse {
  Mensagem?: string;
  Projetos?: ProjetosCompensacao[];
}


export class ProjetosCompensacao {
  Projetos?: ProjetosCompensacao[]
  id?: number;
  nomeProjeto?: string;
  descricaoProjeto?: string;
  dataInicio?: Date;
  dataConclusao?: Date;
  descricaoMedida?: string;
  dataMedida?: Date;
  impactoEmissaoCarbono?: string;
}
