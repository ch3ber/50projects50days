document.querySelector('.button-next').addEventListener('click', nexStep);
document.querySelector('.button-previous').addEventListener('click', previousStep);

function nexStep() {
   const NEXT_STEP_WIDTH = 133.3;

   const progressBar = document.querySelector('.progress-bar');
   const progressBarStyles = window.getComputedStyle(progressBar);
   const maxProgress = parseInt(progressBarStyles.getPropertyValue('width').replace('px', ''));

   const progressElement = document.querySelector('.progress-bar__progress');
   const progressElementStyles = window.getComputedStyle(progressElement);
   const progressElementWidth = progressElementStyles.getPropertyValue('width');
   const newWidth = parseInt(progressElementWidth.replace('px', '')) + NEXT_STEP_WIDTH;

   if (newWidth <= maxProgress) {
      progressElement.style.width = `${newWidth}px`;
   } else {
      return;
   }
}

function previousStep() {
   const STEP_WIDTH = 133.3;
   const MINIMAL_PROGRESS = 0;
   
   const progressElement = document.querySelector('.progress-bar__progress');
   const progressElementStyles = window.getComputedStyle(progressElement);
   const progressElementWidth = progressElementStyles.getPropertyValue('width');
   const newWidth = parseInt(progressElementWidth.replace('px', '')) - STEP_WIDTH;

   if (newWidth < 0) {
      progressElement.style.width = '0';
   }
   if (newWidth > MINIMAL_PROGRESS) {
      progressElement.style.width = `${newWidth}px`;
   } else {
      return;
   }
}
