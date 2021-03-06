import React from 'react'
import { useHistory } from 'react-router-dom'
import { handleRedirectToWhatsApp, handleRedirectToEmail } from '../../utils/handleRedirect'
import {
  Donation,
  DonationHeader,
  ImageBox,
  DonationImage,
  TextBox,
  DonationTitle,
  DonationDescription,
  DonationFooter,
  ButtonsBox,
  BottomLine,
  ONGIdentifier,
  ForwardLink
} from './styles'
import ButtonWithIcon from '../ButtonWithIcon'
import {
  RiWhatsappLine,
  RiMailLine,
  RiArrowRightLine
} from 'react-icons/ri'

interface DonationIconProps {
  id: string
  image: string
  title: string
  description: string
  email: string
  whatsapp: string
}

const DonationItem: React.FC<DonationIconProps> = ({
  id,
  image,
  title,
  description,
  email,
  whatsapp,
  children
}) => {
  const history = useHistory()

  function handleNavigateToDetailsDonationPage(id: string): void {
    history.push(`/donation/detail/${id}`)
  }

  return (
    <Donation>
      <DonationHeader>
        <ImageBox>
          <DonationImage src={image} />
        </ImageBox>

        <TextBox>
          <DonationTitle>{title}</DonationTitle>
          <DonationDescription>{description}</DonationDescription>
        </TextBox>
      </DonationHeader>

      <DonationFooter>
        <ButtonsBox>
          <ButtonWithIcon
            style={{ backgroundColor: '#25D366' }}
            label="WhatsApp"
            Icon={RiWhatsappLine}
            onClick={() => handleRedirectToWhatsApp(whatsapp)}
          />
          <ButtonWithIcon
            style={{ backgroundColor: '#34B7F1' }}
            label="Email"
            Icon={RiMailLine}
            onClick={() => handleRedirectToEmail(email)}
          />
        </ButtonsBox>

        <BottomLine>
          <ONGIdentifier>
            {children}
          </ONGIdentifier>

          <ForwardLink
            onClick={() => handleNavigateToDetailsDonationPage(id)}
          >
            Ver mais
            <RiArrowRightLine size={24} />
          </ForwardLink>
        </BottomLine>
      </DonationFooter>
    </Donation>
  )
}

export default DonationItem
