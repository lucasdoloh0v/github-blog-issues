import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 160%;
    `,
    titleM: css`
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
    `,
    titleS: css`
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
    `,
    textM: css`
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
    `,
    textS: css`
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
    `,
    link: css`
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
    `,
  },
}
