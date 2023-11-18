using FilmesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Immutable;
using System;
using System.Data.SqlClient;

namespace CarbonoZeroApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarbonoZeroController : ControllerBase
    {
        private CarbonozeroContext _dbContext;

        public CarbonoZeroController(CarbonozeroContext context)
        {
            _dbContext = context;
        }

        [HttpPut("Cadastro")]
        public IActionResult RegisterCompany([FromQuery] Empresa empresa)
        {
            if (empresa != null)
            {
                var empresas = _dbContext.Empresas
                    .Where(x => x.Cnpj.Contains(empresa.Cnpj));

                if (empresas.Count() == 0)
                {
                    _dbContext.Empresas.Add(empresa);
                    _dbContext.SaveChanges();

                    return Ok(new { Mensagem = "Empresa cadastrada com sucesso." });
                }
                else
                {
                    return BadRequest(new { Mensagem = "A empresa já está cadastrada no sistema." });
                }
            }
            else
            {
                return BadRequest(new { Mensagem = "Não foi possível realizar o cadastro." });
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Participante participante)
        {
            var login = _dbContext.Participantes
            .FirstOrDefault(u => u.Email == participante.Email && u.Senha == participante.Senha);

            if (login != null)
            {
                return Ok(new { Mensagem = "Login bem-sucedido." });
            }
            else
            {
                return Unauthorized(new { Mensagem = "Credenciais inválidas." });
            }
        }

        [HttpPost("Criar-projeto")]
        public IActionResult CreateProject([FromBody] ProjetosCompensacao projeto)
        {
            if (projeto != null)
            {
                var projetoExistente = _dbContext.Projetoscompensacaos
                    .FirstOrDefault(x => x.NomeProjeto == projeto.NomeProjeto);

                if (projetoExistente != null)
                {
                    return BadRequest(new { Mensagem = "Já existe um projeto com o mesmo nome." });
                }

                _dbContext.Projetoscompensacaos.Add(projeto);
                _dbContext.SaveChanges();

                return Ok(new { Mensagem = "Projeto criado com sucesso." });
            }

            return BadRequest(new { Mensagem = "Dados inválidos para criar o projeto." });
        }

        [HttpPost("Editar-projeto")]
        public IActionResult UpdateProject([FromQuery] ProjetosCompensacao projeto)
        {
            return Ok();
        }

        [HttpDelete("Deletar-projeto/{id}")]
        public IActionResult DeleteProject(int id)
        {
            var projetoExistente = _dbContext.Projetoscompensacaos.Find(id);

            if (projetoExistente == null)
            {
                return NotFound(new { Mensagem = $"Projeto com ID {id} não encontrado." });
            }

            _dbContext.Projetoscompensacaos.Remove(projetoExistente);
            _dbContext.SaveChanges();

            return Ok(new { Mensagem = $"Projeto com ID {id} deletado com sucesso." });
        }

        [HttpGet("Consultar-detalhes-projeto")]
        public IActionResult GetProjectDetails([FromQuery] ProjetosCompensacao projeto)
        {
            return Ok();
        }

    }
}
