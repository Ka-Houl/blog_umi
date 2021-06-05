const envConfig = {
  development: {
    API_DOMAIN: 'http://blog_api.kahoul.top',
    // API_DOMAIN: 'http://localhost:3002',
  },
  production: {
    API_DOMAIN: 'http://blog_api.kahoul.top',
  },
}[process.env.NODE_ENV];

export default envConfig;
