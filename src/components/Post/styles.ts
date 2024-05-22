import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 10px;
  width: 100%;
  height: 260px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};

  h3 {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme['base-title']};
  }
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextSummary = styled.div`
  display: block;
  width: 100%;
  max-width: 352px;
  overflow: hidden;

  p {
    text-overflow: ellipsis;
  }
`
