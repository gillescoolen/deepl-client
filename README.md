## DeepL Client
[![Test](https://github.com/gillescoolen/deepl-client/actions/workflows/test.yml/badge.svg)](https://github.com/gillescoolen/deepl-client/actions/workflows/test.yml)\
See the [official documentation](https://www.deepl.com/docs-api/translating-text/request/) for the available parameters.

You can make a simple request using the following code.

```typescript
const params: TranslationParameters = {
  auth_key: your.authentication.key,
  text: 'This is a sentence.',
  target_lang: Language.French,
};

await translate(params);
```

Which will return a `TranslationResponse`, containing an array with the translation, and the detected source language.

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

### Translate Multiple
To translate an array of text, you can use the `translateMultiple` function.

```typescript
const params: TranslationMultipleParameters = {
  auth_key: your.authentication.key,
  target_lang: Language.French,
};

const text = ['This is a sentence.', 'This is another sentence.'].

await translateMultiple(params, text);
```

Which will return the same `TranslationResponse`, except with more entries.

```json
{
  "translations": [
    {
      "detected_source_language": "EN",
      "text": "C'est une phrase."
    },
    {
      "detected_source_language": "EN",
      "text": "C'est une autre phrase."
    }
  ]
}
```

### Usage
To see the usage statistics linked to your authorization key, you can use the `usage` function.

```typescript
const params: UsageParameters = {
  auth_key: your.authentication.key
};

await usage(params);
```

Which will return a `UsageResponse`, containing the used character count and the set characterl limit.

```json
{
  "character_count":398,
  "character_limit":5000000
}
```

Missing something? Don't hesitate to open an issue or pull request!