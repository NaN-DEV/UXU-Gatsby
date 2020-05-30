// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT STYLE
import {
  Box,
  BoxAuthor,
  BoxAutorImg,
  BoxAutorData,
  BoxAutorName,
  BoxAutorNick,
  BoxDecription,
  BoxButton,
  ListInfo,
  BoxInfo,
  Title,
  Info,
  Or,
} from "./style/style"

// CREATE COMPONENT
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT
const BoxInfoServiceComponent = props => {
  const { content } = props
  return (
    <>
      <Box theme={theme}>
        <BoxAuthor to={`/autor/${content.slug}`}>
          <BoxAutorImg>
            <Img fluid={content.avatar.fixed} title={`${content.firstName} ${content.lastName}`} />
          </BoxAutorImg>
          <BoxAutorData>
            <BoxAutorName>{`${content.firstName} ${content.lastName}`}</BoxAutorName>
            <BoxAutorNick>{content.nick}</BoxAutorNick>
          </BoxAutorData>
        </BoxAuthor>
        <BoxDecription>Hej! zrobie dla Ciebie {content.title.toLowerCase()} :</BoxDecription>
        <ListInfo theme={theme}>
          <BoxInfo theme={theme}>
            <Title theme={theme}>Czas naprawy</Title>
            <Info theme={theme}>{`${content.repairAverageTime} DNI`} </Info>
          </BoxInfo>
          <BoxInfo theme={theme}>
            <Title theme={theme}>Koszt usługi</Title>
            <Info theme={theme}>{`${content.repairCost} PLN`} </Info>
          </BoxInfo>
        </ListInfo>
        <BoxButton>
          <Button title="Pogadajmy" slug="kontakt" />
          <Or>lub</Or>
          <Button title="Oddaj do naprawy" slug="oddaj-do-naprawy" />
        </BoxButton>
      </Box>
    </>
  )
}

export default BoxInfoServiceComponent
