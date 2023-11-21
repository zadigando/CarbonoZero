using System;
using System.Collections.Generic;

namespace FilmesApi.Models;

public partial class ProjetosCompensacao
{
    public int Id { get; set; }

    public string? NomeProjeto { get; set; }

    public string? DescricaoProjeto { get; set; }

    public DateTime? DataInicio { get; set; }

    public DateTime? DataConclusao { get; set; }

    public string? DescricaoMedida { get; set; }

    public DateTime? DataMedida { get; set; }

    public string? ImpactoEmissaoCarbono { get; set; }
}
