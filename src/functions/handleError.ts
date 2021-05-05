import { Response } from 'node-fetch';
import { ApiError } from '../enums/apiError';

/**
 * Handles the error based on the status code.
 * @param response The response from the DeepL API.
 */
export async function handleError(response: Response): Promise<void> {
  const body = await response.text();

  if (body.length) {
    const json = JSON.parse(body);
    if (json.message) throw new Error(json.message);
  }

  const message = ApiError[response.status];

  if (message) throw new Error(message);
  else throw new Error('5XX - Internal Error. Check the docs for more information.');
}
