document.querySelector('.button-next').addEventListener('click', nexStep);
document.querySelector('.button-previous').addEventListener('click', previousStep);

function nexStep() {
   const progressBar = document.querySelector('.progress-bar__progress');
   const progress = parseInt(progressBar.style.width.replace('%', ''));
   const PENULTIMATE_STEP = 66;
   const NEXT_STEP_PROGRESS = progress + 33;

   if (progress == PENULTIMATE_STEP) toggleDisableNextStepButton();
   if (progress < 99) {
      progressBar.setAttribute('style', `width: ${NEXT_STEP_PROGRESS}%`);
      toggleActiveStep(NEXT_STEP_PROGRESS);
   }
}

function toggleDisableNextStepButton() {
   document.querySelector('.button-next').classList.toggle('button--locked');
}

function previousStep() {
   const progressBar = document.querySelector('.progress-bar__progress');
   const progress = parseInt(progressBar.style.width.replace('%', ''));
   const PREVIOUS_STEP = progress - 33;
   
   if (progress > 0) {
      progressBar.setAttribute('style', `width: ${PREVIOUS_STEP}%`);
      toggleActiveStep(progress);
   }
   if (progress == 99) toggleDisableNextStepButton();
}

function toggleActiveStep(progress) {
   const progressBar = document.querySelector('.progress-bar');
   const stepsEquivalences = {
      0: 1,
      33: 2,
      66: 3,
      99: 4
   };

   if (progress == 0) return;
   progressBar.children[stepsEquivalences[progress]]
      .classList.toggle('progress-bar__step--active');
}
