import { Response } from 'node-fetch';
import { handleError } from '../src/functions/handleError';

describe('should throw errors based on the response status code', () => {
  it('throws the relevant message when the status code is 400.', async () => {
    try {
      await handleError(new Response('', { status: 400 }));
    } catch (error) {
      expect(error).toEqual(new Error('400 - Bad request. Please check error message and your parameters.'));
    }
  });

  it('throws the relevant message when the status code is 403.', async () => {
    try {
      await handleError(new Response('', { status: 403 }));
    } catch (error) {
      expect(error).toEqual(new Error('403 - Authorization failed. Please supply a valid auth_key parameter.'));
    }
  });

  it('throws the relevant message when the status code is 404.', async () => {
    try {
      await handleError(new Response('', { status: 404 }));
    } catch (error) {
      expect(error).toEqual(new Error('404 - The requested resource could not be found.'));
    }
  });

  it('throws the relevant message when the status code is 413.', async () => {
    try {
      await handleError(new Response('', { status: 413 }));
    } catch (error) {
      expect(error).toEqual(new Error('413 - The request size exceeds the limit.'));
    }
  });

  it('throws the relevant message when the status code is 429.', async () => {
    try {
      await handleError(new Response('', { status: 429 }));
    } catch (error) {
      expect(error).toEqual(new Error('429 - Too many requests. Please wait and resend your request.'));
    }
  });

  it('throws the relevant message when the status code is 456.', async () => {
    try {
      await handleError(new Response('', { status: 456 }));
    } catch (error) {
      expect(error).toEqual(new Error('456 - Quota exceeded. The character limit has been reached.'));
    }
  });

  it('throws the relevant message when the status code is 503.', async () => {
    try {
      await handleError(new Response('', { status: 503 }));
    } catch (error) {
      expect(error).toEqual(new Error('503 - Resource currently unavailable. Try again later.'));
    }
  });

  it('throws the relevant message when the status code is 500.', async () => {
    try {
      await handleError(new Response('', { status: 500 }));
    } catch (error) {
      expect(error).toEqual(new Error('5XX - Internal Error. Check the docs for more information.'));
    }
  });

  it('throws the relevant message when the status code is 500.', async () => {
    try {
      await handleError(new Response('', { status: 500 }));
    } catch (error) {
      expect(error).toEqual(new Error('5XX - Internal Error. Check the docs for more information.'));
    }
  });

  it('throws the error message from the api if there is one.', async () => {
    try {
      await handleError(new Response('{"message":"I am the api error!"}', { status: 500 }));
    } catch (error) {
      expect(error).toEqual(new Error('I am the api error!'));
    }
  });
});
