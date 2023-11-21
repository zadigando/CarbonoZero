using System;
using System.Collections.Generic;

namespace FilmesApi.Models;

public partial class Creditoscarbono
{
    public int Id { get; set; }

    public int? IdEmpresa { get; set; }

    public int? QuantidadeCreditos { get; set; }

    public DateTime? DataTransacao { get; set; }

    public string? TipoTransacao { get; set; }

    public virtual Empresa? IdEmpresaNavigation { get; set; }
}
