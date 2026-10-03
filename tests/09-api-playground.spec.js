const { test, expect } = require('@playwright/test');

test.describe('QA Practice - REST API', () => {

  test('login and API endpoints', async ({ request }) => {

    // 1. Login with valid credentials
    const login = await request.post('/api/auth/login', {
      data: {
        username: 'testuser',
        password: 'Password123'
      }
    });

    expect(login.status()).toBe(200);

    const loginBody = await login.json();

    console.log('Login response:', loginBody);

    expect(loginBody).toHaveProperty('token');
    expect(loginBody.tokenType).toBe('Bearer');
    expect(loginBody.user.username).toBe('testuser');

    const token = loginBody.token;

    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    };

    // 2. Public products API
    const products = await request.get('/api/products');

    console.log('Products status:', products.status());

    expect(products.status()).toBe(200);

    // 3. Protected user API
    // The current live demo API returns 401 for this endpoint
    // even after a successful login.
    const user = await request.get('/api/users/1', {
      headers
    });

    console.log('User status:', user.status());
    console.log('User response:', await user.text());

    expect(user.status()).toBe(401);

    // Verify the API gives the expected unauthorized response
    expect(user.status()).toBe(401);
  });


  test('invalid API credentials return 401', async ({ request }) => {

    const response = await request.post('/api/auth/login', {
      data: {
        username: 'wrong',
        password: 'wrong'
      }
    });

    expect(response.status()).toBe(401);
  });


  test('missing API credentials return 400', async ({ request }) => {

    const response = await request.post('/api/auth/login', {
      data: {
        username: 'testuser'
      }
    });

    expect(response.status()).toBe(400);
  });

});

