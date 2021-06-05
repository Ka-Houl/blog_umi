// const nodeEnv = 'development';

const envConfig: any = {
  development: {
    // baseUrl: 'http://blog_api.kahoul.top',
    baseUrl: 'http://localhost:9009/api',
  },
  production: {
    baseUrl: 'http://blog_api.kahoul.top',
  },
}[process.env.NODE_ENV as string];

export default envConfig;
