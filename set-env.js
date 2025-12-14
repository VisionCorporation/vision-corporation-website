import { writeFileSync } from 'fs';

const prodPath = './src/environments/environment.ts';
const devPath = './src/environments/environment.development.ts';

const prodEnv = `
export const environment = {
  production: true,
  baseUrl: '${process.env.NG_APP_BASIC_URL}',
};
`;

const devEnv = `
export const environment = {
  production: false,
  baseUrl: '${process.env.NG_APP_BASIC_URL}',
};
`;

writeFileSync(prodPath, prodEnv);
writeFileSync(devPath, devEnv);

console.log('Angular environment files generated.');
