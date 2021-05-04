import { Language, translateMultiple, TranslationMultipleParameters } from '../src';

const params: TranslationMultipleParameters = {
  auth_key: process.env.KEY,
  source_lang: Language.Dutch,
  target_lang: Language.English,
};

const text = ['Dit is een test zin.', 'Dit is ook een test zin.'];

describe('should translate a multiple sentences into another language', () => {
  it('translate from Dutch to English', async () => {
    const response = await translateMultiple(params, text);

    expect(response).toBeDefined();
    expect(response).toHaveProperty('translations');
    expect(response.translations).toBeInstanceOf(Array);
    expect(response.translations).toHaveLength(2);
    expect(response.translations[0]).toHaveProperty('detected_source_language');
    expect(response.translations[0]).toHaveProperty('text');
    expect(response.translations[1]).toHaveProperty('detected_source_language');
    expect(response.translations[1]).toHaveProperty('text');
    expect(response.translations[0].detected_source_language.length).toBeGreaterThan(0);
    expect(response.translations[0].text.length).toBeGreaterThan(0);
    expect(response.translations[1].detected_source_language.length).toBeGreaterThan(0);
    expect(response.translations[1].text.length).toBeGreaterThan(0);
  });

  it('translate from Dutch to English', async () => {
    const response = await translateMultiple({ ...params, target_lang: Language.French }, text);

    expect(response).toBeDefined();
    expect(response).toHaveProperty('translations');
    expect(response.translations).toBeInstanceOf(Array);
    expect(response.translations).toHaveLength(2);
    expect(response.translations[0]).toHaveProperty('detected_source_language');
    expect(response.translations[0]).toHaveProperty('text');
    expect(response.translations[1]).toHaveProperty('detected_source_language');
    expect(response.translations[1]).toHaveProperty('text');
    expect(response.translations[0].detected_source_language.length).toBeGreaterThan(0);
    expect(response.translations[0].text.length).toBeGreaterThan(0);
    expect(response.translations[1].detected_source_language.length).toBeGreaterThan(0);
    expect(response.translations[1].text.length).toBeGreaterThan(0);
  });

  it('throws when the auth key is not active', async () => {
    try {
      await translateMultiple({ ...params, auth_key: '00000000-0000-0000-0000-000000000000' }, text);
    } catch (error) {
      expect(error).toEqual(new Error('403 - Authorization failed. Please supply a valid auth_key parameter.'));
    }
  });

  it('throws when the auth key is invalid', async () => {
    try {
      await translateMultiple({ ...params, auth_key: 'invalid' }, text);
    } catch (error) {
      expect(error).toEqual(new Error('Invalid API key "invalid".'));
    }
  });

  it('throws when the text array is empty', async () => {
    try {
      await translateMultiple(params, []);
    } catch (error) {
      expect(error).toEqual(new Error('Text array was empty. No text to translate.'));
    }
  });

  it('throws when the text array has more than 50 strings', async () => {
    try {
      await translateMultiple(params, new Array(51));
    } catch (error) {
      expect(error).toEqual(
        new Error('Text array contained more than 50 strings. This is a restriction of the DeepL API.'),
      );
    }
  });
});
