import { Response } from 'node-fetch';

/**
 * Handles the error based on the status code.
 * @param response The response from the DeepL API.
 */
export async function handleError(response: Response): Promise<void> {
  const json = await response.json();
  if (json.message) console.error(json.message);

  switch (response.status) {
    case 400:
      throw new Error('400 - Bad request. Please check error message and your parameters.');
    case 403:
      throw new Error('403 - Authorization failed. Please supply a valid auth_key parameter.');
    case 404:
      throw new Error('404 - The requested resource could not be found.');
    case 413:
      throw new Error('413 - The request size exceeds the limit.');
    case 429:
      throw new Error('429 - Too many requests. Please wait and resend your request.');
    case 456:
      throw new Error('456 - Quota exceeded. The character limit has been reached.');
    case 503:
      throw new Error('503 - Resource currently unavailable. Try again later.');
    default:
      throw new Error('5XX - Internal Error. Check the docs for more information.');
  }
}
