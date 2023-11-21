using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Data.Dtos
{
    public class CreateCreditosCarbonoDto
    {
        [Required(ErrorMessage = "Quantidade de créditos é obrigatória!")]
        public int? QuantidadeCreditos { get; set; }

        public DateTime? DataTransacao { get; set; }

        [Required(ErrorMessage = "Necessário informar o tipo de transação(Compra/Venda!)")]
        public string? TipoTransacao { get; set; }
    }
}
