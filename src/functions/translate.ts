
import { TranslationParameters } from '../interfaces/translationParameters';
import { TranslationResponse } from '../interfaces/translationResponse';
import * as querystring from 'query-string';
import fetch from "node-fetch";

/**
 * Translate a string into another language using the DeepL API.
 * @property {TranslationParameters} params The parameters you can send to configure DeepL.
 * @returns {TranslationResponse} An array of translated text.
 */
export async function translate(params: TranslationParameters): Promise<TranslationResponse> {
  return await fetch(`https://api.deepl.com/v2/translate?${querystring.stringify(params)}`)
    .then(res => {
      return res.json()
    }).catch(error => console.error(error));
}