import { Response } from 'node-fetch';

/**
 * Handles the error based on the status code.
 * @param response The response from the DeepL API.
 */
export async function handleError(response: Response): Promise<void> {
  switch (response.status) {
    case 400:
      console.error('400 - Bad request. Please check error message and your parameters.');
      break;
    case 403:
      console.error('403 - Authorization failed. Please supply a valid auth_key parameter.');
      break;
    case 404:
      console.error('404 - The requested resource could not be found.');
      break;
    case 413:
      console.error('413 - The request size exceeds the limit.');
      break;
    case 429:
      console.error('429 - Too many requests. Please wait and resend your request.');
      break;
    case 456:
      console.error('456 - Quota exceeded. The character limit has been reached.');
      break;
    case 503:
      console.error('503 - Resource currently unavailable. Try again later.');
      break;
    default:
      console.error('5XX - Internal Error. Check the docs for more information.');
      break;
  }

  const json = await response.json();
  if (json.message) console.error(json.message);
}
