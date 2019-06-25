/* eslint-disable indent */
const currentEnv = process.env.NODE_ENV;

const dev = {
  API_HOST:
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
};
const prod = {
  API_HOST:
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
};
const uat = {
  API_HOST:
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
};
const qa = {
  API_HOST:
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
};
const staging = {
  API_HOST:
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
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
