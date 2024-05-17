import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  position: relative;

  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  text-align: center;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0 0 8px ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: start;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-title']};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileLink = styled.a`
  position: absolute;
  top: 2remm;
  right: 2.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};

  ${mixins.fonts.link}
`

export const Infos = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-subtitle']};
  }
`
