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
});
