import { Language, translate, TranslationParameters } from '../src';

const params: TranslationParameters = {
  auth_key: process.env.API_KEY,
  text: 'Dit is een test zin.',
  source_lang: Language.Dutch,
  target_lang: Language.English,
};

describe('should translate a single sentence into another language', () => {
  it('translate to English', async () => {
    const response = await translate({ ...params, target_lang: Language.English });

    expect(response).toBeDefined();
    expect(response).toHaveProperty('translations');
    expect(response.translations).toBeInstanceOf(Array);
    expect(response.translations).toHaveLength(1);
    expect(response.translations[0]).toHaveProperty('detected_source_language');
    expect(response.translations[0]).toHaveProperty('text');
    expect(response.translations[0].detected_source_language.length).toBeGreaterThan(0);
    expect(response.translations[0].text.length).toBeGreaterThan(0);
  });

  it('translate to French', async () => {
    const response = await translate({ ...params, target_lang: Language.French });

    expect(response).toBeDefined();
    expect(response).toHaveProperty('translations');
    expect(response.translations).toBeInstanceOf(Array);
    expect(response.translations).toHaveLength(1);
    expect(response.translations[0]).toHaveProperty('detected_source_language');
    expect(response.translations[0]).toHaveProperty('text');
    expect(response.translations[0].detected_source_language.length).toBeGreaterThan(0);
    expect(response.translations[0].text.length).toBeGreaterThan(0);
  });

  it('throws when the auth key is not active', async () => {
    try {
      await translate({ ...params, auth_key: '00000000-0000-0000-0000-000000000000' });
    } catch (error) {
      expect(error).toEqual(new Error('403 - Authorization failed. Please supply a valid auth_key parameter.'));
    }
  });

  it('throws when the auth key is invalid', async () => {
    try {
      await translate({ ...params, auth_key: 'invalid' });
    } catch (error) {
      expect(error).toEqual(new Error('Invalid API key "invalid".'));
    }
  });
});
