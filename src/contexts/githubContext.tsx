import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  login: string
  avatarUrl: string
  bio: string
  company: string | null
  followers: number
  htmlUrl: string
}

interface GitHubContextType {
  user: User
}

interface GithubContextProviderProps {
  children: ReactNode
}

interface DataGithubUsersAPI {
  name: string
  login: string
  avatar_url: string
  bio: string
  company: string | null
  followers: number
  html_url: string
}

export const GithubContext = createContext({} as GitHubContextType)

export const GithubContextProvider = ({
  children,
}: GithubContextProviderProps) => {
  const [user, setUser] = useState({} as User)

  const getUser = useCallback(async () => {
    const {
      data: {
        avatar_url: avatarUrl,
        bio,
        company,
        followers,
        login,
        name,
        html_url: htmlUrl,
      },
    } = await api.get<DataGithubUsersAPI>('/users/lucasdoloh0v')

    setUser({
      avatarUrl,
      bio,
      followers,
      login,
      name,
      company,
      htmlUrl,
    })
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <GithubContext.Provider value={{ user }}>{children}</GithubContext.Provider>
  )
}
