document.addEventListener("DOMContentLoaded", function () {
  const senhaInput = document.getElementById("insira_senha");
  const mostrarSenhaButton = document.getElementById("icone_senha");

  mostrarSenhaButton.addEventListener("click", () => {
    if (senhaInput.type === "password") {
      senhaInput.type = "text"; // Mostrar a senha
    } else {
      senhaInput.type = "password"; // Ocultar a senha
    }
  });
});
