document.querySelector('.button-next').addEventListener('click', nexStep);
document.querySelector('.button-previous').addEventListener('click', previousStep);

function nexStep() {
   const progressBar = document.querySelector('.progress-bar__progress');
   const progress = parseInt(progressBar.style.width.replace('%', ''));
   const NEXT_STEP_PROGRESS = progress + 33;

   if (NEXT_STEP_PROGRESS == 33) toggleDisableButton('button-previous');
   if (NEXT_STEP_PROGRESS == 99) toggleDisableButton('button-next');
   if (progress < 99) {
      progressBar.setAttribute('style', `width: ${NEXT_STEP_PROGRESS}%`);
      toggleActiveStep(NEXT_STEP_PROGRESS);
   }
}

function toggleDisableButton(button) {
   document.querySelector(`.${button}`).classList.toggle('button--locked');
}

function previousStep() {
   const progressBar = document.querySelector('.progress-bar__progress');
   const progress = parseInt(progressBar.style.width.replace('%', ''));
   const PREVIOUS_STEP_PROGRESS = progress - 33;
   
   if (PREVIOUS_STEP_PROGRESS == 0) toggleDisableButton('button-previous');
   if (progress == 99) toggleDisableButton('button-next');
   if (progress > 0) {
      progressBar.setAttribute('style', `width: ${PREVIOUS_STEP_PROGRESS}%`);
      toggleActiveStep(progress);
   }
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
