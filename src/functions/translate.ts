import fetch from 'cross-fetch';
import * as querystring from 'query-string';
import { TranslationParameters } from '../interfaces/translation/translationParameters';
import { TranslationResponse } from '../interfaces/translation/translationResponse';

/**
 * Translate a string into another language using the DeepL API.
 * @property {TranslationParameters} params The parameters you can send to configure DeepL.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
export async function translate(params: TranslationParameters): Promise<TranslationResponse> {
  const response = await fetch(`https://api.deepl.com/v2/translate?${querystring.stringify(params)}`, {
    method: 'POST',
  });

  if (!response.ok) throw `Something went wrong. Are you using a valid authorization key? (${await response.json()})`;

  return response.json();
}
