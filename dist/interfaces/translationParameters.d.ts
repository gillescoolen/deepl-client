import { Language } from "../enums/language";
/**
 * The parameters you can send to configure DeepL.
 *
 * @property {string} auth_key Your authentication key.
 * @property {string} text The text you want to translate.
 * @property {Language} target_lang The language you want to translate from.
 * @property {Language} source_lang Your authentication key.
 * @property {string} auth_key Your authentication key.
 */
export interface TranslationParameters {
    /**
     * The authentication key as found in your account settings.
     * @type {string}
     */
    auth_key: string;
    /**
     * The text you want to translate.
     * @type {string}
     */
    text: string;
    /**
     * Language of the text to be translated.
     *
     * If this parameter is omitted, the API will attempt to detect the language of the text and translate it.
     * @type {Language}
     *
     */
    source_lang?: Language;
    /**
     * Language of the text to be translated.
     *
     * If this parameter is omitted, the API will attempt to detect the language of the text and translate it.
     *
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
     *
     */
    split_sentences?: string;
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
     */
    preserve_formatting?: number;
    /**
     * Sets which kind of tags should be handled. Options currently available:
     *
     * "xml"
     */
    tag_handling?: string;
    /**
     * Comma-separated list of XML tags which never split sentences.
     */
    non_splitting_tags?: string;
    /**
     * Please see the [Handling XML](https://www.deepl.com/docs-api.html?part=xml) section for further details.
     */
    outline_detection?: string;
    /**
     * Comma-separated list of XML tags which always cause splits.
     */
    splitting_tags?: string;
    /**
     * Comma-separated list of XML tags that indicate text not to be translated.
     */
    ignore_tags?: string;
}
