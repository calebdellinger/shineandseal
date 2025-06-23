exports.handler = async function(event, context) {
  console.log('=== Test Function Called ===');
  console.log('Event:', JSON.stringify(event, null, 2));
  console.log('Context:', JSON.stringify(context, null, 2));
  
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Test basic function execution
    const testData = {
      message: 'Test function is working!',
      timestamp: new Date().toISOString(),
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        env: process.env.NODE_ENV || 'not set'
      },
      event: {
        httpMethod: event.httpMethod,
        path: event.path,
        queryStringParameters: event.queryStringParameters,
        headers: event.headers
      },
      context: {
        functionName: context.functionName,
        functionVersion: context.functionVersion,
        memoryLimitInMB: context.memoryLimitInMB,
        remainingTimeInMillis: context.getRemainingTimeInMillis()
      }
    };

    console.log('Test function completed successfully:', testData);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(testData)
    };
  } catch (error) {
    console.error('Error in test function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Test function failed',
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      })
    };
  }
}; 