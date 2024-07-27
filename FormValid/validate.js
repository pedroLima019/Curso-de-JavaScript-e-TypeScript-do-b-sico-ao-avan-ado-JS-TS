const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#Senha");
const submitBtn = document.querySelector(".btn-enviar");

const errorMensage = document.querySelector(".msg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (nameValue === "" || emailValue === "" || passwordValue === "") {
    errorMensage.textContent = "Preencha os dados para prosseguir ! ";
  }
});
