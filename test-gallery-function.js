// Test script for the gallery Netlify function
const { handler } = require('./.netlify/functions/api-gallery');

// Mock event object
const event = {
  httpMethod: 'GET',
  path: '/api/gallery',
  headers: {
    'Content-Type': 'application/json'
  }
};

// Mock context
const context = {};

async function testFunction() {
  try {
    console.log('Testing gallery Netlify function...');
    console.log('Event:', JSON.stringify(event, null, 2));
    
    const result = await handler(event, context);
    
    console.log('Function result:');
    console.log('Status Code:', result.statusCode);
    console.log('Headers:', result.headers);
    console.log('Body length:', result.body ? result.body.length : 0);
    
    if (result.body) {
      try {
        const parsedBody = JSON.parse(result.body);
        console.log('Parsed body (first 200 chars):', JSON.stringify(parsedBody).substring(0, 200) + '...');
      } catch (e) {
        console.log('Body (not JSON):', result.body.substring(0, 200) + '...');
      }
    }
    
  } catch (error) {
    console.error('Function error:', error);
  }
}

testFunction(); 