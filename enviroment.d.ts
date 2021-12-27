declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_URI?: string
    ENVIRONMENT: Environment
    OAUTH_CLIENT_ID?: string
    OAUTH_CLIENT_SECRET?: string
    OAUTH_CALLBACKURL?: string
    COOKIE_SECRET: string
  }

  enum Environment {
    PRODUCTION = 'PRODUCTION',
    DEVELOPMENT = 'DEVELOPMENT',
    TESTING = 'TESTING',
  }
}
