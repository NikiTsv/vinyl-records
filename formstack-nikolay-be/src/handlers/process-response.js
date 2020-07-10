module.exports = (isCors, body, event, statusCode) => {
    const status = statusCode || (body ? 200 : 204);
    const headers = { 'Content-Type': 'application/json' };
    if (isCors) {
      Object.assign(headers, {
        'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,GET',
        'Access-Control-Allow-Origin': '*', // optional config: process.env.CORS_ORIGIN
        'Access-Control-Max-Age': '86400'
      });
    }
    const bodyStr = JSON.stringify(body)

    console.log(`response from: ${event.path} statusCode: ${status} body: ${bodyStr}`)
    return {
      statusCode: status,
      body: bodyStr || '',
      headers: headers
    };
  };