const config = {
  oauthClientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
  proxyDomain: import.meta.env.VITE_PROXY_DOMAIN,
  baseUrl: import.meta.env.BASE_URL,
  learningPlatformApi: import.meta.env.VITE_LEARNING_PLATFORM_API,
  courseName: import.meta.env.VITE_COURSE_NAME,
  globalProgress: import.meta.env.VITE_GLOBAL_PROGRESS_BAR === 'true',
  doAuth: import.meta.env.VITE_REQUIRES_GITHUB_AUTHENTICATION === 'true',
};

export default config;