using System;
using System.Collections.Generic;

namespace FilmesApi.Models;

public partial class Participante
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public string CNPJ { get; set; }

    public string RazaoSocial { get; set; }

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string Telefone{ get; set; }

    public string Tipo { get; set; } = null!;

    public DateTime DataRegistro { get; set; }

    public virtual ICollection<Empresa> Empresas { get; set; } = new List<Empresa>();
}
