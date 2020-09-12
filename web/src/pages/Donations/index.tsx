import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'

import { useAuth } from '../../contexts/auth'

import {
  Container,
  SearchContainer,
  SubContainer,
  CardContainer,
  SelectContainer,
  DonationsContainer,
  ButtonsContainer
} from './styles'
import ButtonWithIcon from '../../components/ButtonWithIcon'
import Header from '../../components/Header'
import Description from '../../components/Description'
import SubTitle from '../../components/SubTitle'
import CategoryCard from '../../components/CategoryCard'
import Select from '../../components/Select'
import DonationItem from '../../components/DonationItem'

import {
  RiAddCircleLine,
  RiSearchLine,
  RiAccountCircleLine
} from 'react-icons/ri'

import image from '../../assets/images/image.jpg'

interface UfProps {
  sigla: string
  nome: string
}

interface CityProps {
  nome: string
}

const Donations: React.FC = () => {
  const [ufs, setUfs] = useState([])
  const [cities, setCities] = useState([])

  const { signed } = useAuth()

  const [selectedLocation, setSelectedLocation] = useState({
    uf: '',
    city: ''
  })

  function handleSetSelectedLocation(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target

    setSelectedLocation({
      ...selectedLocation,
      [name]: value
    })
  }

  useEffect(() => {
    try {
      axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(({ data }) => {
          setUfs(data)
        })
        .catch(() => {
          throw new Error()
        })

      console.info('[auth context] > ', signed)
    } catch (error) {
      console.error(`[ufs request] > ${error}`)
    }
  }, [signed])

  useEffect(() => {
    try {
      axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${
        selectedLocation.uf
      }/municipios`)
        .then(({ data }) => {
          setCities(data)
        })
        .catch(() => {
          throw new Error()
        })
    } catch (error) {
      console.error(`[cities request] > ${error}`)
    }
  }, [selectedLocation.uf])

  return (
    <Container>
      <Header>
        <ButtonsContainer>
          <ButtonWithIcon
            label="Perfil"
            isOutline={true}
            Icon={RiAccountCircleLine}
          />

          <ButtonWithIcon
            label="Doar"
            Icon={RiAddCircleLine}
          />
        </ButtonsContainer>
      </Header>

      <SearchContainer>
        <SubContainer>
          <SubTitle>Categorias</SubTitle>
          <Description>
            Selecione as categorias de itens que você deseja.
          </Description>

          <CardContainer>
            <CategoryCard
              label="Roupas"
              iconUrl="http://localhost:3333/icons/cloth.svg"
              isCardSelected={true}
            />
            <CategoryCard
              label="Roupas"
              iconUrl="http://localhost:3333/icons/cloth.svg"
              isCardSelected={false}
            />
          </CardContainer>
        </SubContainer>

        <SubContainer>
          <SubTitle>Localização</SubTitle>
          <Description>
            Selecione o estado e a cidade que vocẽ está.
          </Description>

          <SelectContainer>
            <Select
              name="uf"
              label="UF"
              onChange={handleSetSelectedLocation}
            >
              {ufs.map((uf: UfProps) => {
                let { sigla, nome } = uf

                return (
                  <option key={sigla} value={sigla}>
                    {nome}
                  </option>
                )
              })}
            </Select>

            <Select
              name="city"
              label="Cidade"
              onChange={handleSetSelectedLocation}
            >
              {cities.map((city: CityProps) => {
                let { nome } = city

                return (
                  <option key={nome} value={nome}>
                    {nome}
                  </option>
                )
              })}
            </Select>

            <ButtonWithIcon
              label="Buscar"
              Icon={RiSearchLine}
            />
          </SelectContainer>
        </SubContainer>
      </SearchContainer>

      <DonationsContainer>
        <DonationItem
          id={2}
          title="Sofá"
          description="É um anúncio show."
          image={image}
          email="contato@ong.com.br"
          whatsapp="47999999999"
        />
      </DonationsContainer>
    </Container>
  )
}

export default Donations
