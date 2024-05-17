import styled from 'styled-components'

export const Container = styled.header`
  z-index: -1;
  width: 100vw;
  height: 296px;

  background: ${(props) => props.theme['base-post']};

  position: relative;

  img {
    position: absolute;
  }

  img#left {
    left: 0;
  }

  img#right {
    right: 0;
  }

  img#logo {
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`
