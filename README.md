[![Tests](https://github.com/gillescoolen/deepl-client/actions/workflows/test.yml/badge.svg)](https://github.com/gillescoolen/deepl-client/actions/workflows/test.yml) [![Linter](https://github.com/gillescoolen/deepl-client/actions/workflows/lint.yml/badge.svg)](https://github.com/gillescoolen/deepl-client/actions/workflows/lint.yml) [![Build](https://github.com/gillescoolen/deepl-client/actions/workflows/build.yml/badge.svg)](https://github.com/gillescoolen/deepl-client/actions/workflows/build.yml) <a href="https://codeclimate.com/github/gillescoolen/deepl-client/maintainability"><img src="https://api.codeclimate.com/v1/badges/1ec22f4c574f9660bae0/maintainability" /></a>
<a href="https://codeclimate.com/github/gillescoolen/deepl-client/test_coverage"><img src="https://api.codeclimate.com/v1/badges/1ec22f4c574f9660bae0/test_coverage" /></a>

# Archived due to the DeepL team releasing an official Node client.
See https://github.com/DeepLcom/deepl-node for the official client.
Thanks to everyone contributing over the years. Bye! 👋

## DeepL Client
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

### Contributing

Install the dependencies using `npm ci`.\
Run the linter with `npm run lint`.\
Copy the `env.example` file and add a valid API key.\
Run the tests with `npm t`.
