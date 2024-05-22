import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { Container } from './styles'
import { useGithub } from '../../hooks/useGithub'

interface FormInputs {
  query: string
}

export const SearchPost = () => {
  const { register, watch } = useForm<FormInputs>()
  const { getPosts } = useGithub()

  const query = watch('query')

  useEffect(() => {
    const interval = setTimeout(() => {
      getPosts(query)
    }, 1000)

    return () => {
      clearTimeout(interval)
    }
  }, [query, getPosts])

  return (
    <Container
      type="text"
      placeholder="Busque por publicações"
      {...register('query')}
    />
  )
}
