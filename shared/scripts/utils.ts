/**
 * Shared utility functions
 * These can be imported by site-specific scripts
 */

/**
 * Log a message with a timestamp
 */
export function logMessage(message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

/**
 * Format a date string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Add a click event listener with logging
 */
export function addClickListener(
  selector: string,
  callback: () => void
): void {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      logMessage(`Button clicked: ${selector}`);
      callback();
    });
  });
}

/**
 * Initialize common functionality
 */
export function initializeCommon(siteName: string): void {
  logMessage(`Initializing ${siteName}`);
  
  // Add current date to footer if exists
  const footer = document.querySelector('.footer');
  if (footer) {
    const dateElement = document.createElement('p');
    dateElement.className = 'footer-date';
    dateElement.textContent = `Today is ${formatDate(new Date())}`;
    footer.appendChild(dateElement);
  }
}
