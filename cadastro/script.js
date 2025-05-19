document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const submitButton = document.querySelector(".submit-button");
  
    // Critérios de validação
    const criteria = {
      letter: {
        test: value => /[a-zA-Z]/.test(value)
      },
      characters: {
        test: value => value.length >= 10
      },
      special: {
        test: value => /[\d\W_]/.test(value)
      }
    };
  
    // Verifica se a senha é válida
    function isPasswordValid(value) {
      return Object.values(criteria).every(({ test }) => test(value));
    }
  
    // Atualiza visuais e botão
    function validatePassword(value) {
      // Atualiza visual dos critérios
      Object.entries(criteria).forEach(([id, { test }]) => {
        const li = document.getElementById(id);
        const ball = li.querySelector(".ball");
        const text = li.querySelector(".color-text");
  
        if (test(value)) {
          ball.classList.add("ok");
          text.classList.add("ok");
        } else {
          ball.classList.remove("ok");
          text.classList.remove("ok");
        }
      });
  
      // Fora do forEach: ativa/desativa botão
      if (isPasswordValid(value)) {
        submitButton.disabled = false;
        submitButton.classList.remove("disabled");
      } else {
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
      }
    }
  
    // Escuta digitação no input de senha
    passwordInput.addEventListener("input", function () {
      validatePassword(passwordInput.value);
    });
  

    form.addEventListener("submit", function (event) {
        if (!isPasswordValid(passwordInput.value)) {
            event.preventDefault();
        }
    });

  
    // Estado inicial do botão
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
  });
  
