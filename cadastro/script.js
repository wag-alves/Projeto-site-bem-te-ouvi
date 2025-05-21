document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("password");
  const submitButton = document.querySelector(".submit-button");
  const submitButton2 = document.querySelector(".submit-button2");
  const publicar = document.querySelector(".publish");
  const ouvir = document.querySelector(".hear");
  const cpf = document.getElementById("cpf");
  const pix = document.getElementById("pix");
  const email = document.getElementById("email");
  const ancora1 = document.querySelector(".container1");
  const ancora2 = document.querySelector(".container2");
  const formulario1 = document.querySelector(".container-form1");
  const formulario2 = document.querySelector(".container-form2");
  const nomeEntrar = document.querySelector(".enter-name");
  const migalha = document.querySelector(".progress-bar");

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
      if (isPasswordValid(value) && email.checkValidity()) {
        submitButton.disabled = false;
        submitButton.classList.remove("disabled");
      } else {
        submitButton.disabled = true;
        submitButton.classList.add("disabled");
      }
    }

    publicar.addEventListener("click", function () {
      document.getElementById("input-container-publish").style.display = "block";
      cpf.required = true;
      pix.required = true;
    });

    ouvir.addEventListener("click", function(){
      document.getElementById("input-container-publish").style.display = "none";
      pix.required = false;
      cpf.required = false;
    });

    // Escuta digitação no input de senha
    passwordInput.addEventListener("input", function () {
      validatePassword(passwordInput.value);
    });

    email.addEventListener("input", function () {
      validatePassword(passwordInput.value);
    });

    form.addEventListener("submit", function (event) {
        if (!isPasswordValid(passwordInput.value)) {
            event.preventDefault();
        }
    });


    submitButton.addEventListener("click", function (event) {
      event.preventDefault();

      ancora1.classList.remove("active", "disable");
      ancora1.classList.add("disable");

      ancora2.classList.remove("active", "disable");
      ancora2.classList.add("active");

      nomeEntrar.style.visibility = "hidden";

      formulario1.classList.remove("active", "disable");
      formulario1.classList.add("disable");

      formulario2.classList.remove("active", "disable");
      formulario2.classList.add("active");

      migalha.style.width = "66.66%";
  });


    // submitButton.addEventListener("click", function (event) {
    //   event.preventDefault(); // <-- PREVINE o envio do formulário e recarregamento
    //   ancora1.classList.add("disable");
    //   ancora2.classList.add("active");
    //   nomeEntrar.style.visibility = "hidden";
    //   formulario1.classList.add("disable");
    //   formulario2.classList.add("active");
    //   migalha = migalha.style.width = "66.66%";
    // });

  
    // Estado inicial do botão
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    submitButton2.disabled = true;
    submitButton2.classList.add("disabled");
  });
  
