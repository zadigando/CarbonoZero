using FilmesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Immutable;
using System;
using System.Data.SqlClient;
using System.Security.Cryptography;
using CarbonoZeroApi.Services;

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
        public IActionResult RegisterCompany([FromBody] Participante participante)
        {
            if (participante != null)
            {
                var existingParticipante = _dbContext.Participantes.FirstOrDefault(x => x.CNPJ == participante.CNPJ);

                if (existingParticipante != null)
                {
                    return BadRequest(new { Mensagem = "A empresa já está cadastrada no sistema." });
                }
                else
                {
                    _dbContext.Participantes.Add(participante);
                    _dbContext.SaveChanges();

                    return Ok(new { Mensagem = "Empresa cadastrada com sucesso." });
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
            byte[] key = new byte[32];
            using (var rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(key);
            }
            string chaveSecreta = Convert.ToBase64String(key);

            if (string.IsNullOrEmpty(chaveSecreta))
            {
                return StatusCode(500, new { Mensagem = "Chave secreta não definida." });
            }

            var login = _dbContext.Participantes.FirstOrDefault(u => u.Email == participante.Email && u.Senha == participante.Senha);

            if (login != null)
            {
                var tokenService = new TokenService(chaveSecreta);
                string token = tokenService.GenerateJwtToken(login.Email);
                return Ok(new { Token = token, Mensagem = "Login bem-sucedido." });
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

        [HttpGet("Listar-projetos")]
        public IActionResult GetProjects()
        {
            // Obter todos os projetos do banco de dados
            var projetos = _dbContext.Projetoscompensacaos.ToList();

            // Verificar se há projetos no banco de dados
            if (projetos.Count > 0)
            {
                // Percorrer a lista e remover projetos com NomeProjeto vazio
                projetos.RemoveAll(p => string.IsNullOrEmpty(p.NomeProjeto));

                if (projetos.Count > 0)
                {
                    return Ok(new { Mensagem = "Projetos encontrados com sucesso.", Projetos = projetos });
                }
                else
                {
                    return NotFound(new { Mensagem = "Todos os projetos têm o campo NomeProjeto vazio." });
                }
            }

            // Se não houver projetos, retornar uma mensagem adequada
            return NotFound(new { Mensagem = "Nenhum projeto encontrado no banco de dados." });
        }

    }
}
