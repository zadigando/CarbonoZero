using System;
using System.Collections.Generic;

namespace FilmesApi.Models;

public partial class Empresa
{
    public int Id { get; set; }

    public int IdParticipante { get; set; }

    public string NomeEmpresa { get; set; } = null!;

    public string SetorEmpresa { get; set; } = null!;

    public string Cnpj { get; set; } = null!;

    public int AvaliacaoEmissoes { get; set; }

    public int CreditosCarbono { get; set; }

    public string Elegibilidade { get; set; } = null!;

    public DateTime DataAvaliacaoElegibilidade { get; set; }

    public virtual ICollection<Creditoscarbono> Creditoscarbonos { get; set; } = new List<Creditoscarbono>();

    public virtual ICollection<Emissoes> Emissoes { get; set; } = new List<Emissoes>();

    public virtual Participante IdParticipanteNavigation { get; set; } = null!;
}
