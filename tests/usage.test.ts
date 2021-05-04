import { usage, UsageParameters } from '../src';

const usageParameters: UsageParameters = {
  auth_key: process.env.KEY,
};

describe('usage should return usage statistics', () => {
  it('should return usage statistics', async () => {
    const response = await usage(usageParameters);

    expect(response).toBeDefined();
    expect(response).toHaveProperty('character_count');
    expect(response).toHaveProperty('character_limit');
    expect(response.character_count).toBeDefined();
    expect(response.character_limit).toBeDefined();
    expect(response.character_count).toBeGreaterThanOrEqual(0);
    expect(response.character_limit).toBeGreaterThanOrEqual(0);
  });
});
