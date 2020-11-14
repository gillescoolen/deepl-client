import fetch from 'cross-fetch';
import * as querystring from 'query-string';
import { TranslationMultipleParameters } from '../interfaces/translation/translationMultipleParameters';
import { TranslationParameters } from '../interfaces/translation/translationParameters';
import { TranslationResponse } from '../interfaces/translation/translationResponse';
import { UsageParameters } from '../interfaces/usage/usageParameters';
import { UsageResponse } from '../interfaces/usage/usageResponse';

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

  const query = querystring.stringify(params);
  const mappedText = text.map(t => `&text=${t}`);
  const queryWithText = query.concat(...mappedText);

  const response = await fetch(`https://api.deepl.com/v2/translate?${queryWithText}`, {
    method: 'POST',
  });

  if (!response.ok) throw `Something went wrong. Are you using a valid authorization key? (${await response.json()})`;

  return response.json();
}

/**
 * Get your usage statistics from DeepL.
 * @property {UsageParameters} params Contains the auth key linked to your account.
 * @returns {Promise<UsageResponse>} Your usage statistics.
 */
export async function usage(params: UsageParameters): Promise<UsageResponse> {
  const response = await fetch(`https://api.deepl.com/v2/usage?${querystring.stringify(params)}`, {
    method: 'POST',
  });

  if (!response.ok) throw `Something went wrong. Are you using a valid authorization key? (${await response.json()})`;

  return response.json();
}
