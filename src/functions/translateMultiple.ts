import fetch from 'node-fetch';
import * as querystring from 'query-string';
import { TranslationMultipleParameters } from '../interfaces/translation/translationMultipleParameters';
import { TranslationResponse } from '../interfaces/translation/translationResponse';
import { getDomain } from './getDomain';
import { handleError } from './handleError';

/**
 * Translate multiple strings into another language using the DeepL API.
 * @property {TranslationMultipleParameters} params The parameters you can send to configure DeepL.
 * @property {string[]} text The text you want to translate.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
export async function translateMultiple(
  params: TranslationMultipleParameters,
  text: string[],
): Promise<TranslationResponse> {
  if (text.length < 1) throw 'Text array was empty. No text to translate.';
  if (text.length > 50) throw 'Text array contained more than 50 strings. This is a restriction of the DeepL API.';

  const body = querystring.stringify({
    ...params,
    text,
  });

  const response = await fetch(`${getDomain(params)}/translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) throw await handleError(response);

  return response.json();
}
