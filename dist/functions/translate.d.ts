import { TranslationParameters } from '../interfaces/translationParameters';
import { TranslationResponse } from '../interfaces/translationResponse';
/**
 * Split a string into substrings using the specified separator and return them as an array.
 * Translate a string into another language using the DeepL Api.
 * @property {TranslationParameters} params The parameters you can send to configure DeepL.
 * @returns {TranslationResponse}
 * An array of translated text.
 */
export declare function translate(params: TranslationParameters): Promise<TranslationResponse>;
