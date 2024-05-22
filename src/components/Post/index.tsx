import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'

import { Container, ContainerHeader, TextSummary } from './styles'

interface PostProps {
  post: {
    title: string
    body: string
    createdAt: string
    htmlUrl: string
  }
}

export const Post = ({ post }: PostProps) => {
  return (
    <Container>
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
