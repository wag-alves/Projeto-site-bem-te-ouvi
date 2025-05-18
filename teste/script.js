const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.prev');
const formSteps = document.querySelectorAll('.form-step');
const steps = document.querySelectorAll('.step');
const progress = document.getElementById('progress');

let currentStep = 0;

function updateForm() {
  // Mostrar etapa ativa
  formSteps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });

  // Atualizar círculos (breadcrumbs)
  steps.forEach((step, index) => {
    step.classList.toggle('active', index <= currentStep);
  });

  // Atualizar barra de progresso
  const progressPercent = (currentStep) / (formSteps.length - 1) * 100;
  progress.style.width = `${progressPercent}%`;
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      updateForm();
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateForm();
    }
  });
});

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Formulário enviado com sucesso!');
});
