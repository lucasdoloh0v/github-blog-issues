import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchPost } from '../../components/SearchPost'
import { useGithub } from '../../hooks/useGithub'
import { Container, Heading, Posts } from './styles'

export const Blog = () => {
  const { posts } = useGithub()

  return (
    <Container>
      <Profile />
      <Heading>
        <h3>Publicações</h3>
        <p>{posts.length + ' '} publicações</p>
      </Heading>
      <SearchPost />
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Posts>
    </Container>
  )
}
