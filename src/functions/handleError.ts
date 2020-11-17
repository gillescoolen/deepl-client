/**
 * Handles the error based on the status code.
 * @param response The response from the DeepL API.
 */
export function handleError(code: number): void {
  switch (code) {
    case 400:
      console.error('Bad request. Please check error message and your parameters.');
      break;
    case 403:
      console.error('Authorization failed. Please supply a valid auth_key parameter.');
      break;
    case 404:
      console.error('The requested resource could not be found.');
      break;
    case 413:
      console.error('The request size exceeds the limit.');
      break;
    case 429:
      console.error('Too many requests. Please wait and resend your request.');
      break;
    case 456:
      console.error('Quota exceeded. The character limit has been reached.');
      break;
    case 503:
      console.error('Resource currently unavailable. Try again later.');
      break;
    default:
      console.error('Internal Error. Check with the DeepL Team for more information.');
      break;
  }
}
