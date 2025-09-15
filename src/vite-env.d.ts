/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OAUTH_URL: string
  readonly VITE_OAUTH_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
