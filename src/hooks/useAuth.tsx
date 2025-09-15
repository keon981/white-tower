import React, { createContext, use, useCallback, useMemo, useState } from 'react'

import { useLocalStorage } from 'usehooks-ts'

interface Props {
  children: React.ReactNode
}

interface AuthContextType {
  isAuthenticated: boolean
  user: { login: string, avatarUrl: string } | null
  token: string | null
  isLoading: boolean
  onLogin: () => void
  onLogout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

function useAuth() {
  const context = use(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

function AuthProvider({ children }: Props) {
  // state
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useLocalStorage<{ login: string, avatarUrl: string } | null>('github_user', null)
  const [token, setToken] = useLocalStorage<string | null>('github_token', null)
  const [isLoading, setIsLoading] = useState(true)

  // handlers
  const onLogout = useCallback(() => {
    setToken(null)
    setUser(null)
    setIsAuthenticated(false)
    setIsLoading(false)
    localStorage.removeItem('github_token')
    localStorage.removeItem('github_user')
  }, [])

  const onLogin = useCallback(
    () => {
      const githubOauthURL = import.meta.env.VITE_OAUTH_URL
      const query = {
        client_id: confi,
      }
    },
    [second],
  )

  // memo
  const authStateMemo = useMemo(() => ({
    isAuthenticated,
    user,
    token,
    onLogout,
  }), [isAuthenticated, onLogout, token, user])

  return (
    <AuthContext value={authStateMemo}>
      {children}
    </AuthContext>
  )
}

export { AuthProvider, useAuth }
