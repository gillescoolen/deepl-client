import fetch from 'node-fetch';
import * as querystring from 'query-string';
import { TranslationParameters } from '../interfaces/translationParameters';
import { TranslationResponse } from '../interfaces/translationResponse';

/**
 * Translate a string into another language using the DeepL API.
 * @property {TranslationParameters} params The parameters you can send to configure DeepL.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
export async function translate(params: TranslationParameters): Promise<TranslationResponse> {
  const response = await fetch(`https://api.deepl.com/v2/translate?${querystring.stringify(params)}`);
  return response.json();
}
