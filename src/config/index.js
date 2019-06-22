const currentEnv = process.env.NODE_ENV;

const dev = {
  API_HOST: 'http://localhost:8080'
};
const prod = {
  API_HOST: 'http://localhost:8080'
};
const uat = {
  API_HOST: 'http://localhost:8080'
};
const qa = {
  API_HOST: 'http://localhost:8080'
};
const staging = {
  API_HOST: 'http://localhost:8080'
};

const config =
  currentEnv === 'production'
    ? prod
    : currentEnv === 'development'
      ? dev
      : currentEnv === 'uat'
        ? uat
        : currentEnv === 'qa'
          ? qa
          : staging;

const baseOptions = {
  url: config.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

export { currentEnv, config, baseOptions };
