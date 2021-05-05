export enum ApiError {
  '400 - Bad request. Please check error message and your parameters.' = 400,
  '403 - Authorization failed. Please supply a valid auth_key parameter.' = 403,
  '404 - The requested resource could not be found.' = 404,
  '413 - The request size exceeds the limit.' = 413,
  '429 - Too many requests. Please wait and resend your request.' = 429,
  '456 - Quota exceeded. The character limit has been reached.' = 456,
  '503 - Resource currently unavailable. Try again later.' = 503,
}
