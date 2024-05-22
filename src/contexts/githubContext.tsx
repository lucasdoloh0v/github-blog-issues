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

interface Post {
  id: number
  title: string
  body: string
  createdAt: string
  htmlUrl: string
}

interface GitHubContextType {
  user: User
  posts: Post[]
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

interface Item {
  id: number
  title: string
  body: string
  created_at: string
  html_url: string
}

interface DataGithubSearchAPI {
  items: Item[]
}

export const GithubContext = createContext({} as GitHubContextType)

export const GithubContextProvider = ({
  children,
}: GithubContextProviderProps) => {
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState([] as Post[])

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

  const getPosts = useCallback(async (query?: string) => {
    let queryString = 'repo:lucasdoloh0v/github-blog-issues'

    if (query) {
      queryString = queryString + ' ' + query
    }

    const { data } = await api.get<DataGithubSearchAPI>('/search/issues', {
      params: {
        q: queryString + ' is:issue',
      },
    })

    setPosts(
      data.items.map<Post>((item) => ({
        id: item.id,
        body: item.body,
        createdAt: item.created_at,
        htmlUrl: item.html_url,
        title: item.title,
      })),
    )
  }, [])

  useEffect(() => {
    getUser()
    getPosts()
  }, [getUser, getPosts])

  return (
    <GithubContext.Provider value={{ user, posts }}>
      {children}
    </GithubContext.Provider>
  )
}
