import { Language } from '../../enums/language';

/**
 * The parameters you can send to configure DeepL.
 * @property {string} auth_key Your authentication key.
 * @property {string} text The text you want to translate.
 * @property {Language} target_lang The language you want to translate from.
 * @property {Language} source_lang Your authentication key.
 * @property {string} auth_key Your authentication key.
 */
export interface TranslationMultipleParameters {
  /**
   * The authentication key as found in your account settings.
   * @type {string}
   */
  auth_key: string;

  /**
   * Language of the text to be translated.
   *
   * If this parameter is omitted, the API will attempt to detect the language of the text and translate it.
   * @type {Language}
   */

  source_lang?: Language;

  /**
   * Language of the text to be translated.
   *
   * If this parameter is omitted, the API will attempt to detect the language of the text and translate it.
   * @type {Language}
   */

  target_lang: Language;

  /**
   * Sets whether the translation engine should first split the input into sentences. This is enabled by default. Possible values are:
   *
   * "0" - no splitting at all, whole input is treated as one sentence
   *
   * "1" (default) - splits on interpunction and on newlines
   *
   * "nonewlines" - splits on interpunction only, ignoring newlines
   *
   * For applications that send one sentence per text parameter, it is advisable to set split_sentences=0,
   * in order to prevent the engine from splitting the sentence unintentionally.
   * @type {string}
   */
  split_sentences?: '0' | '1' | 'nonewlines';

  /**
   * Sets whether the translation engine should respect the original formatting, even if it would usually correct some aspects.
   * Possible values are:
   *
   * "0" (default)
   *
   * "1"
   *
   * The formatting aspects affected by this setting include:
   *
   * Punctuation at the beginning and end of the sentence.
   *
   * Upper/lower case at the beginning of the sentence.
   * @type {number}
   */
  preserve_formatting?: 0 | 1;

  /**
   * Sets whether the translated text should lean towards formal or informal language.
   * This feature currently only works for "DE (German)", "NL (Dutch)" and "PL (Polish)" as target language.
   * Possible options are:
   *
   * "default" (default)
   *
   * "more" - for a more formal language
   *
   * "less" - for a more informal language
   * @type {string}
   */
  formality?: 'default' | 'more' | 'less';

  /**
   * Sets which kind of tags should be handled. Options currently available:
   *
   * "xml"
   * @type {string}
   */
  tag_handling?: 'xml';

  /**
   * Comma-separated list of XML tags which never split sentences.
   * @type {string}
   */
  non_splitting_tags?: string;

  /**
   * Please see the [Handling XML](https://www.deepl.com/docs-api.html?part=xml) section for further details.
   * @type {string}
   */
  outline_detection?: string;

  /**
   * Comma-separated list of XML tags which always cause splits.
   * @type {string}
   */
  splitting_tags?: string;

  /**
   * Comma-separated list of XML tags that indicate text not to be translated.
   * @type {string}
   */
  ignore_tags?: string;
}
