function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) { // Correção: e.keyCode, não e.keycode
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("conta inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("conta inválida");
        return;
      }
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

