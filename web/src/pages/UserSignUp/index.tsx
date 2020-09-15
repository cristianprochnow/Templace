import React from 'react'

import {
  Container,
  SignUpForm,
  InputGroup2x2,
  InputGroup3x2
} from './styles'

import Title from '../../components/Title'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Dropzone from '../../components/Dropzone'
import PasswordInput from '../../components/PasswordInput'
import Textarea from '../../components/Textarea'
import Fieldset from '../../components/Fieldset'
import Button from '../../components/Button'

const UserSignUp: React.FC = () => {
  return (
    <Container>
      <Header />

      <SignUpForm>
        <Title>Cadastro de usuário</Title>

        <Dropzone
          onFileUpload={file => console.log(file)}
        />

        <Fieldset legend="Informações pessoais">
          <InputGroup3x2>
            <Input
              label="Como deseja ser chamado?"
              name="name"
            />

            <Input
              type="number"
              min="0"
              label="Número de WhatsApp"
              name="whatsapp"
            />
          </InputGroup3x2>

          <Textarea
            label="Uma breve descrição sobre você"
            name="bio"
          />
        </Fieldset>

        <Fieldset legend="Dados para Log In">
          <Input
            label="E-mail"
            name="contato@dominio.com"
          />

          <InputGroup2x2>
            <PasswordInput
              label="Senha"
              name="password"
              example="No mínimo 8 caracteres."
              min="8"
            />

            <PasswordInput
              label="Confirme sua senha"
              name="retypedPassword"
              example="Redigite sua senha."
              min="8"
            />
          </InputGroup2x2>
        </Fieldset>

        <Button
          label="Enviar"
        />
      </SignUpForm>
    </Container>
  )
}

export default UserSignUp
