import styled from 'styled-components'

export const Container = styled.div`
  width: 90vw;
  max-width: 856px;
  min-height: 100vh;
  margin: auto;
`

export const SignUpForm = styled.form`
  width: 100%;
  padding: 2.4rem;
  margin: .8rem 0 2.4rem 0;

  display: flex;
  flex-direction: column;

  border: 0;
  border-radius: 1.6rem;
  background-color: var(--color-in-background);

  & > button {
    margin-top: 4.8rem;
  }

  @media (min-width: 769px) {
    & > button {
      align-self: flex-end;
    }
  }
`

export const InputGroup3x2 = styled.div`
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: .8rem;
  }
`

export const InputGroup2x2 = styled.div`
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: .8rem;
  }
`
