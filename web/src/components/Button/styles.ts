import styled from 'styled-components'

export const Button = styled.button`
  height: 5.6rem;
  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: .8rem;

  font: 700 1.6rem Montserrat;

  background: var(--color-button-action);
  color: var(--color-text-in-button);

  cursor: pointer;
  transition: opacity var(--time-transition-button);

  &:hover {
    opacity: var(--opacity-800);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--opacity-400);
  }
`
