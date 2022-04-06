/**
 * Env variables initialization module
 * @remark If the value of at least one variable is not found,
 * the Application will immediately throw an error when the module is initialized
 * @module
 */

const getEnvVariable = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return import.meta.env[key] || '';
};

/** The mode the app is running on */
export const NODE_ENV = getEnvVariable('MODE');

/** App is running in development mode */
export const isDevEnv = getEnvVariable('DEV');

/** App is running in production mode */
export const isProdEnv = getEnvVariable('PROD');

/** Custom variable from .env file */
export const CUSTOMVAR = getEnvVariable('VITE_CUSTOMVAR');
