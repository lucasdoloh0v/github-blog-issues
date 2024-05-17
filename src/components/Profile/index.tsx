import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Container, Content, Info, Infos, ProfileLink } from './styles'
import { useGithub } from '../../hooks/useGithub'

export const Profile = () => {
  const { user } = useGithub()

  const { avatarUrl, name, bio, login, followers, company, htmlUrl } = user

  return (
    <Container>
      <ProfileLink href={htmlUrl} target="_blank" rel="noreferrer noopener">
        <span>GITHUB</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </ProfileLink>
      <img src={avatarUrl} alt="" />
      <Content>
        <div>
          <h1>{name}</h1>
          <span>{bio}</span>
        </div>
        <Infos>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{login}</span>
          </Info>
          {company && (
            <Info>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{company}</span>
            </Info>
          )}
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} seguidores</span>
          </Info>
        </Infos>
      </Content>
    </Container>
  )
}
