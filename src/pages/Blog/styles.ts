import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;

  max-width: 864px;
  width: 100%;

  margin: 0 auto;
  margin-top: -80px;
`
export const Posts = styled.main`
  max-width: 864px;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
