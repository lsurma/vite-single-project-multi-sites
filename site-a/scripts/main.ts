// Site A main script
import { initializeCommon, addClickListener, logMessage } from '@shared-scripts/utils';

// Initialize common functionality
initializeCommon('Site A');

// Site A specific functionality
let clickCount = 0;

addClickListener('.demo-button', () => {
  clickCount++;
  const output = document.querySelector('.demo-output');
  if (output) {
    output.textContent = `Button clicked ${clickCount} time(s) on Site A!`;
  }
});

// Log that Site A is ready
logMessage('Site A is ready!');
