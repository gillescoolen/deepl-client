import { Language, translate, TranslationParameters } from '../src';

const params: TranslationParameters = {
  auth_key: process.env.KEY,
  text: 'Dit is een test zin.',
  source_lang: Language.Dutch,
  target_lang: Language.English,
};

describe('translate should translate a single sentence into another language', () => {
  it('should translate to English', async () => {
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

  it('should translate to French', async () => {
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
});
