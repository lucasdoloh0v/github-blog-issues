import { Container } from './styles'
import effect from '../../assets/effect.svg'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <Container>
      <img src={effect} alt="" id="left" />
      <img src={effect} alt="" id="right" />
      <img src={logo} alt="logo" id="logo" />
    </Container>
  )
}
