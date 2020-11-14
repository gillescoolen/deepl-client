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
export declare function translate(params: TranslationParameters): Promise<TranslationResponse>;
/**
 * Translate multiple strings into another language using the DeepL API.
 * @property {TranslationMultipleParameters} params The parameters you can send to configure DeepL.
 * @property {string[]} text The text you want to translate.
 * @returns {Promise<TranslationResponse>} An array of translated text.
 */
export declare function translateMultiple(params: TranslationMultipleParameters, text: string[]): Promise<TranslationResponse>;
/**
 * Get your usage statistics from DeepL.
 * @property {UsageParameters} params Contains the auth key linked to your account.
 * @returns {Promise<UsageResponse>} Your usage statistics.
 */
export declare function usage(params: UsageParameters): Promise<UsageResponse>;
