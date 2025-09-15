interface ThreoksConfig {
  request?: {
    token?: string
    clientID?: string
    clientSecret?: string
    pageSize?: number
    autoProxy?: string
    owner?: string
    repo?: string
  }
  app?: {
    onlyShowOwner?: boolean
    enableRepoSwitcher?: boolean
    enableAbout?: boolean
    enableEgg?: boolean
  }
}

interface ThreoksOptions {
  container?: HTMLElement
  config?: ThreoksConfig
}

declare global {
  interface Window {
    threoks?: (options?: ThreoksOptions) => void
  }
}
