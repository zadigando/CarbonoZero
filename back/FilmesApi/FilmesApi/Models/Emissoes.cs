using System;
using System.Collections.Generic;

namespace FilmesApi.Models;

public partial class Emissoes
{
    public int Id { get; set; }

    public int? IdEmpresa { get; set; }

    public DateTime? DataAvaliacao { get; set; }

    public string? ResultadosAvaliacao { get; set; }

    public virtual Empresa? IdEmpresaNavigation { get; set; }
}
