# DeepL Client

A client for the DeepL Translation API written in TypeScript.

## Usage

You can make a simple request using the following code.

```typescript
const params: TranslationParameters = {
  auth_key: your.authentication.key,
  text: 'This is a sentence.',
  target_lang: Language.French,
};

return await translate(params);
```

This will return an object with a translations array. Each object in the array has a `detected_source_language` property which, as the name implies, has the detected source language. It reflects the value of `source_lang`, when specified.

```json
{
  "translations": [
    {
      "detected_source_language": "EN",
      "text": "C'est une phrase."
    }
  ]
}
```

## Translation Parameters

The DeepL API has a couple of basic parameters. These are all documented in [`TranslationParameters`](https://github.com/GillesWHC/deepl-client/blob/master/src/interfaces/translationParameters.ts) aswell.

- [**`text`**](#Text) - Text to be translated.
- [**`auth_key`**](#auth_key) - The authentication key as found in your account settings.
- [**`source_lang`**](#source_lang) - Language of the text to be translated.
- [**`target_lang`**](#target_lang) - The language into which the text should be translated.
- [**`split_sentences`**](#split_sentences) - Sets whether the translation engine should first split the input into sentences. This is enabled by default.
- [**`preserve_formatting`**](#preserve_formatting) - Sets whether the translation engine should respect the original formatting, even if it would usually correct some aspects.
- [**`formality`**](#formality) - Sets whether the translated text should lean towards formal or informal language.
- [**`tag_handling`**](#tag_handling) - Sets which kind of tags should be handled.
- [**`non_splitting_tags`**](#non_splitting_tags) - Comma-separated list of XML tags which never split sentences.
- [**`splitting_tags`**](#splitting_tags) - Comma-separated list of XML tags which always cause splits.
- [**`outline_detection`**](#outline_detection) - Please see the [Handling XML](https://www.deepl.com/docs-api.html?part=xml) section for further details.
- [**`ignore_tags`**](#ignore_tags) - Comma-separated list of XML tags that indicate text not to be translated.

### `text`

Text to be translated. Only UTF8-encoded plain text is supported. The parameter may be specified multiple times and translations are returned in the same order as they are requested. Each of the parameter values may contain multiple sentences. Up to 50 texts can be sent for translation in one request. This parameter is required.

> `text: 'This is a sentence.'`

### `auth_key`

The authentication key as found in your account settings. This parameter is required

> `auth_key: 'this-is-your-auth-key'`

### `source_lang`

Language of the text to be translated. All languages are accessible through the [`Language`](https://github.com/GillesWHC/deepl-client/blob/master/src/enums/language.ts) enum. Options currently available:

- English
- German
- French
- Spanish
- Portuguese
- Italian
- Dutch
- Polish
- Russian

If this parameter is omitted, the API will attempt to detect the language of the text and translate it. This parameter is required.

> `source_lang: Language.English`

### `target_lang`

The language into which the text should be translated. All languages are accessible through the [`Language`](https://github.com/GillesWHC/deepl-client/blob/master/src/enums/language.ts) enum. Options currently available:

- English
- German
- French
- Spanish
- Portuguese
- Italian
- Dutch
- Polish
- Russian

> `target_lang: Language.French`

### `split_sentences`

Sets whether the translation engine should first split the input into sentences. This is enabled by default. Possible values are:

- '0' - no splitting at all, whole input is treated as one sentence
- '1' (default) - splits on interpunction and on newlines
- 'nonewlines' - splits on interpunction only, ignoring newlines

For applications that send one sentence per text parameter, it is advisable to set split_sentences=0, in order to prevent the engine from splitting the sentence unintentionally. This parameter is optional.

> `split_sentences: '1'`

### `preserve_formatting`

Sets whether the translation engine should respect the original formatting, even if it would usually correct some aspects. Possible values are:

- '0' (default)
- '1'

The formatting aspects affected by this setting include:

- Punctuation at the beginning and end of the sentence
- Upper/lower case at the beginning of the sentence

This parameter is optional.

> `preserve_formatting: '0'`

### `formality`

Sets whether the translated text should lean towards formal or informal language. This feature currently only works for "DE (German)", "NL (Dutch)" and "PL (Polish)" as target language.
Possible options are:

- 'default' (default)
- 'more' - for a more formal language
- 'less' - for a more informal language

This parameter is optional.

> `formality: 'more'`

### `tag_handling`

Sets which kind of tags should be handled. Options currently available:

- 'xml'

This parameter is optional.

> `tag_handling: 'xml'`

### `non_splitting_tags`

Comma-separated list of XML tags which never split sentences.

This parameter is optional. Only works when `tag_handling` is set to `'xml'`.

> `non_splitting_tags: 'strong,em,span'`

### `splitting_tags`

Comma-separated list of XML tags which always splits sentences.

This parameter is optional. Only works when `tag_handling` is set to `'xml'`.

> `splitting_tags: 'h1,h2,div,p,par'`

### `ignore_tags`

Comma-separated list of XML tags that indicate text not to be translated.

This parameter is optional. Only works when `tag_handling` is set to `'xml'`.

> `ignore_tags: 'a,custom-tag'`

### `outline_detection`

Please see the [Handling XML](https://www.deepl.com/docs-api.html?part=xml) section for further details. Options currently available:

- `'0'`
- `'1'`

This parameter is optional. Only works when `tag_handling` is set to `'xml'`.

> `outline_detection: '1'`

---

## Translation Response

The DeepL API always responds with an array of objects. Each object contains a translation with their respective language.

- **`text`**- The translated text.
- **`detected_source_language`** - The language detected in the source text. It reflects the value of the `source_lang` parameter, when specified.

---

## Todo's

- Add example response to the README
- Change Translation Parameters snake_casing to camelCasing.
