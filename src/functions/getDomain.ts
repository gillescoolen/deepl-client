/**
 * Returns the right domain corresponding to the user's key type.
 * @property params used to check if you have a valid authentication key.
 * @returns the free or paid host url.
 */
export function getDomain(params: { auth_key: string }): string {
  try {
    return params.auth_key && params.auth_key.match(/:fx/g)
      ? 'https://api-free.deepl.com/v2'
      : 'https://api.deepl.com/v2';
  } catch (error) {
    throw new Error(`Invalid API key "${params.auth_key}".`);
  }
}
