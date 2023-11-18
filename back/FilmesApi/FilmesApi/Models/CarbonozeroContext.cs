using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FilmesApi.Models;

public partial class CarbonozeroContext : DbContext
{
    public CarbonozeroContext()
    {
    }

    public CarbonozeroContext(DbContextOptions<CarbonozeroContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Creditoscarbono> Creditoscarbonos { get; set; }

    public virtual DbSet<Emissoes> Emissoes { get; set; }

    public virtual DbSet<Empresa> Empresas { get; set; }

    public virtual DbSet<Participante> Participantes { get; set; }

    public virtual DbSet<ProjetosCompensacao> Projetoscompensacaos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=carbonozero;user=root;password=%fLCnyTrKi*(&¨%", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.34-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Creditoscarbono>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("creditoscarbono");

            entity.HasIndex(e => e.IdEmpresa, "ID_Empresa");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DataTransacao).HasColumnType("datetime");
            entity.Property(e => e.IdEmpresa).HasColumnName("ID_Empresa");
            entity.Property(e => e.TipoTransacao).HasMaxLength(10);

            entity.HasOne(d => d.IdEmpresaNavigation).WithMany(p => p.Creditoscarbonos)
                .HasForeignKey(d => d.IdEmpresa)
                .HasConstraintName("creditoscarbono_ibfk_1");
        });

        modelBuilder.Entity<Emissoes>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("emissoes");

            entity.HasIndex(e => e.IdEmpresa, "ID_Empresa");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DataAvaliacao).HasColumnType("datetime");
            entity.Property(e => e.IdEmpresa).HasColumnName("ID_Empresa");
            entity.Property(e => e.ResultadosAvaliacao).HasMaxLength(255);

            entity.HasOne(d => d.IdEmpresaNavigation).WithMany(p => p.Emissoes)
                .HasForeignKey(d => d.IdEmpresa)
                .HasConstraintName("emissoes_ibfk_1");
        });

        modelBuilder.Entity<Empresa>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("empresas");

            entity.HasIndex(e => e.IdParticipante, "ID_Participante");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Cnpj)
                .HasMaxLength(20)
                .HasColumnName("CNPJ");
            entity.Property(e => e.DataAvaliacaoElegibilidade).HasColumnType("datetime");
            entity.Property(e => e.Elegibilidade).HasMaxLength(3);
            entity.Property(e => e.IdParticipante).HasColumnName("ID_Participante");
            entity.Property(e => e.NomeEmpresa).HasMaxLength(255);
            entity.Property(e => e.SetorEmpresa).HasMaxLength(255);

            entity.HasOne(d => d.IdParticipanteNavigation).WithMany(p => p.Empresas)
                .HasForeignKey(d => d.IdParticipante)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("empresas_ibfk_1");
        });

        modelBuilder.Entity<Participante>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("participantes");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DataRegistro).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.Nome).HasMaxLength(255);
            entity.Property(e => e.Senha).HasMaxLength(255);
            entity.Property(e => e.Tipo).HasMaxLength(50);
        });

        modelBuilder.Entity<ProjetosCompensacao>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("projetoscompensacao");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DataConclusao).HasColumnType("datetime");
            entity.Property(e => e.DataInicio).HasColumnType("datetime");
            entity.Property(e => e.DataMedida).HasColumnType("datetime");
            entity.Property(e => e.DescricaoMedida).HasColumnType("text");
            entity.Property(e => e.DescricaoProjeto).HasColumnType("text");
            entity.Property(e => e.ImpactoEmissaoCarbono).HasColumnType("text");
            entity.Property(e => e.NomeProjeto).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
