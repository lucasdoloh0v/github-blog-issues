import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  padding: 0.75rem;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
