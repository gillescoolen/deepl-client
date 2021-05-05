import { getDomain } from '../src/functions/getDomain';

const params = {
  auth_key: process.env.API_KEY,
};

describe('should return a different domain for free / paid keys', () => {
  it('returns the domain corresponding to the api key type', () => {
    const domain = getDomain(params);

    expect(domain).toBeDefined();

    if (params.auth_key.match(/:fx/g)) expect(domain).toBe('https://api-free.deepl.com/v2');
    else expect(domain).toBe('https://api.deepl.com/v2');
  });

  it('throws an error when the api key is invalid', () => {
    expect(() => {
      getDomain({ auth_key: 'invalid' });
    }).toThrowError(new Error(`Invalid API key "invalid".`));
  });
});
