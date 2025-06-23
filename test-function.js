// Test script for the gallery function
const { handler } = require('./.netlify/functions/api-gallery');

async function testFunction() {
  console.log('Testing gallery function...');
  
  const event = {
    httpMethod: 'GET',
    path: '/api/gallery',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const context = {};
  
  try {
    const result = await handler(event, context);
    console.log('Function result:');
    console.log('Status Code:', result.statusCode);
    console.log('Headers:', result.headers);
    
    if (result.body) {
      try {
        const parsed = JSON.parse(result.body);
        console.log('Response (first 200 chars):', JSON.stringify(parsed).substring(0, 200) + '...');
      } catch (e) {
        console.log('Response (not JSON):', result.body.substring(0, 200) + '...');
      }
    }
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testFunction(); 