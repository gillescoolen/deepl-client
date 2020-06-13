import { TranslationParameters } from '../interfaces/translationParameters';
import { TranslationResponse } from '../interfaces/translationResponse';
/**
 * Translate a string into another language using the DeepL API.
 * @property {TranslationParameters} params The parameters you can send to configure DeepL.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
export declare function translate(params: TranslationParameters): Promise<TranslationResponse>;
