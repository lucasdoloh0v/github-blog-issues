import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

import { Container, ContainerHeader, TextSummary } from './styles'

interface PostProps {
  post: {
    number: number
    title: string
    body: string
    createdAt: string
    htmlUrl: string
  }
}

export const Post = ({ post }: PostProps) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/post/${post.number}`)
  }

  return (
    <Container onClick={handleNavigate}>
      <ContainerHeader>
        <h3>{post.title}</h3>
        <p>
          {formatDistanceToNowStrict(post.createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </p>
      </ContainerHeader>

      <TextSummary>
        <Markdown allowedElements={['p']}>{post.body}</Markdown>
      </TextSummary>
    </Container>
  )
}
