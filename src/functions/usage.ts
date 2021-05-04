import fetch from 'node-fetch';
import * as querystring from 'query-string';
import { UsageParameters } from '../interfaces/usage/usageParameters';
import { UsageResponse } from '../interfaces/usage/usageResponse';
import { getDomain } from './getDomain';
import { handleError } from './handleError';

/**
 * Get your usage statistics from DeepL.
 * @property {UsageParameters} params Contains the auth key linked to your account.
 * @returns {Promise<UsageResponse>} Your usage statistics.
 */
export async function usage(params: UsageParameters): Promise<UsageResponse> {
  try {
    const body = querystring.stringify(params);

    const response = await fetch(`${getDomain(params)}/usage?${querystring.stringify(params)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) throw await handleError(response);

    return response.json();
  } catch (error) {}
}
