import styled from 'styled-components'
import { Description } from '../../components/Description/styles'
import { SubTitle } from '../../components/SubTitle/styles'
import { Title } from '../../components/Title/styles'

export const Container = styled.div`
  width: 90vw;
  max-width: 856px;
  min-height: 100vh;
  margin: auto;
`

export const UserProfileEditButtons = styled.div`
  display: flex;
  gap: .8rem;
`

export const ProfileContainer = styled.main`
  width: 100%;
  margin: .8rem 0 2.4rem 0;
  padding: 2.4rem;

  border: 0;
  border-radius: 1.6rem;
  background-color: var(--color-in-background);
`

export const UserPhoto = styled.div`
  width: 100%;
  height: 24rem;

  border: 0;
  border-radius: 1.6rem;

  overflow: hidden;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const UserSubject = styled.div`
  width: 100%;
  margin-top: 3.2rem;
`

export const UserName = styled(SubTitle)`
`

export const UserBio = styled(Description)`
`

export const UserContact = styled.div`
  width: 100%;
  margin-top: 4.8rem;
  gap: 1.6rem;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 769px) {
    & {
      grid-template-columns: 2fr 4fr;
    }
  }
`

export const ContactBox = styled.div`
  width: 100%;
  height: 6.4rem;

  display: flex;

  overflow: hidden;
`

export const ContactIcon = styled.span`
  height: 100%;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: .4rem solid;
  border-radius: .8rem 0 0 .8rem;
  color: var(--color-in-background);
`

export const ContactText = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: .4rem solid;
  border-left: 0;
  border-radius: 0 .8rem .8rem 0;
`

export const Text = styled.strong`
  font: 600 1.4rem Montserrat;
  line-height: 3.2rem;
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ModalTitle = styled(Title)`
  font-size: 3.2rem;
  line-height: 4.8rem;
  text-align: center;
`

export const ModalAlert = styled.span`
  width: 100%;
  padding: 2.4rem;
  gap: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: .8rem;
  background-color: var(--color-background-danger);
  color: var(--color-text-danger);

  font: 500 1.6rem Montserrat;
  text-align: center;
`

export const ModalInfo = styled.strong`
  width: 100%;
  text-align: center;
  gap: .8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font: 500 1.4rem Montserrat;
  color: var(--color-info);
`

export const ModalButtons = styled.div`
  width: 100%;
  gap: .8rem;

  display: grid;
  grid-template-columns: 1fr;
`
