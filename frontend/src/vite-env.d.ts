/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONSULTATION_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
