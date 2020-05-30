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
  Succes,
  Waring,
  Danger,
} from "./style/style"

// CREATE COMPONENT
import Button from "../../../atoms/button/button"

// CREATE NEW COMPONENT
const BoxInfoComponent = props => {
  const { content } = props

  const old = new Date().getFullYear() - parseInt(content.birthday)
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
        <BoxDecription>{content.desciption}</BoxDecription>
        <BoxButton>
          <Button
            title={
              content.type === "blog"
                ? `Inne wpisy`
                : `${content.type === "tutorial" ? `Inne poradniki` : `Inne`}`
            }
            slug={
              content.type === "blog"
                ? `/autor/${content.slug}`
                : `${
                    content.type === "tutorial"
                      ? `/autor/${content.slug}/poradniki`
                      : `/autor/${content.slug}`
                  }`
            }
          />
        </BoxButton>
        <ListInfo theme={theme}>
          {content.type === "blog" && (
            <>
              <BoxInfo theme={theme}>
                <Title theme={theme}>lokalizacja</Title>
                <Info theme={theme}>{`${content.locationCity}, ${content.locationCountry}`}</Info>
              </BoxInfo>
              <BoxInfo theme={theme}>
                <Title theme={theme}>wiek</Title>
                <Info theme={theme}>{`${old} lat`}</Info>
              </BoxInfo>
            </>
          )}
          {content.type === "tutorial" && (
            <>
              <BoxInfo theme={theme}>
                <Title theme={theme}>poziom trudnosci</Title>
                <Info theme={theme}>
                  {content.difficultyLevel === 1 && <Succes theme={theme}>łatwy</Succes>}
                  {content.difficultyLevel === 2 && <Waring theme={theme}>średni</Waring>}
                  {content.difficultyLevel === 3 && <Danger theme={theme}>trudny</Danger>}
                </Info>
              </BoxInfo>
              <BoxInfo theme={theme}>
                <Title theme={theme}>potrzebny czas</Title>
                <Info theme={theme}>{`${content.repairTime} min`}</Info>
              </BoxInfo>
            </>
          )}
        </ListInfo>
      </Box>
    </>
  )
}

export default BoxInfoComponent
