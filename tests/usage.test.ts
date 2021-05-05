import { usage, UsageParameters } from '../src';

const usageParameters: UsageParameters = {
  auth_key: process.env.API_KEY,
};

describe('usage should return the usage statistics for the current api key', () => {
  it('fetches usage statistics', async () => {
    const response = await usage(usageParameters);

    expect(response).toBeDefined();
    expect(response).toHaveProperty('character_count');
    expect(response).toHaveProperty('character_limit');
    expect(response.character_count).toBeDefined();
    expect(response.character_limit).toBeDefined();
    expect(response.character_count).toBeGreaterThanOrEqual(0);
    expect(response.character_limit).toBeGreaterThanOrEqual(0);
  });

  it('throws when the auth key is not active', async () => {
    try {
      await usage({ auth_key: '00000000-0000-0000-0000-000000000000' });
    } catch (error) {
      expect(error).toEqual(new Error('403 - Authorization failed. Please supply a valid auth_key parameter.'));
    }
  });

  it('throws when the auth key is invalid', async () => {
    try {
      await usage({ auth_key: 'invalid' });
    } catch (error) {
      expect(error).toEqual(new Error('Invalid API key "invalid".'));
    }
  });
});
