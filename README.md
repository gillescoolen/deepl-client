# DeepL Client
A client for the DeepL Translation API written in TypeScript.

## Usage
```typescript
const params: TranslationParameters = {
  auth_key: your.authentication.key,
  text: 'This is a sentence.',
  target_lang: Language.French,
}

return await translate(params);
```