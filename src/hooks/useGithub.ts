import { useContext } from 'react'
import { GithubContext } from '../contexts/githubContext'

export const useGithub = () => {
  return useContext(GithubContext)
}
