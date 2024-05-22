import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { useGithub } from '../../hooks/useGithub'
import { Container, Posts } from './styles'

export const Blog = () => {
  const { posts } = useGithub()

  return (
    <Container>
      <Profile />
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Posts>
    </Container>
  )
}
