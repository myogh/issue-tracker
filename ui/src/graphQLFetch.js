import fetch from 'isomorphic-fetch';
const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(_, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

export default async function graphQLFetch(
  query,
  variables = {},
  showError = null
) {
  /**
   * Params: query string, variables if to mutate data in server.
   * Fetches list of issue from the server.
   * Displays errors based on the result.
   * Returns the fetched issue list.
   */
  const apiEndpoint = __isBrowser__
    ? window.ENV.UI_API_ENDPOINT
    : process.env.UI_API_ENDPOINT;
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    // to handle the Date, the response is parsed as json text
    // rather than a json object, here body is a string of json data
    // JSON.parse(JsonString, ...)
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        if (showError) showError(`${error.message}:\n ${details}`);
      } else if (showError) {
        showError(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    // cathing the transport error
    if (showError) showError(`Error in sending data to server: ${e.message}`);
    return null;
  }
}
