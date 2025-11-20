// Site B main script
import { initializeCommon, addClickListener, logMessage } from '@shared-scripts/utils';

// Initialize common functionality
initializeCommon('Site B');

// Site B specific functionality
let clickCount = 0;

addClickListener('.demo-button', () => {
  clickCount++;
  const output = document.querySelector('.demo-output');
  if (output) {
    output.textContent = `Button clicked ${clickCount} time(s) on Site B!`;
  }
});

// Log that Site B is ready
logMessage('Site B is ready!');
