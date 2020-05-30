// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"
// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import {
  Box,
  BoxAvatar,
  BoxContent,
  BoxDataAuthor,
  BoxName,
  BoxNick,
  BoxDecription,
  BoxTelephone,
  BoxList,
  Ul,
  Li,
  ListTitle,
  ListEmail,
  P,
} from "./style/style"

// IMPORT COMPONENT
import Row from "../../../atoms/row/row"

// CREATE NEW COMPONENT
const BoxAuthorComponent = props => {
  const { content } = props
  console.log(content)
  const telephone = `${content.telephoneNumber}`
  const desciption = `${content.desciption}`
  const old = new Date().getFullYear() - parseInt(content.birthday)
  console.log(old)
  return (
    <>
      <Row>
        <Box theme={theme}>
          <BoxContent theme={theme}>
            <BoxAvatar theme={theme}>
              <Img
                fluid={content.avatar.fixed}
                title={`${content.firstName} ${content.lastName}`}
              />
            </BoxAvatar>
            <BoxDataAuthor theme={theme}>
              <BoxName theme={theme}>{`${content.firstName} ${content.lastName}`}</BoxName>
              <BoxNick theme={theme}>{content.nick}</BoxNick>
              <BoxDecription theme={theme}>{desciption.slice(0, 40)}</BoxDecription>
              <BoxTelephone theme={theme} href={`tel:${telephone}`}>{`+48 ${telephone.replace(
                /(.{3})/g,
                " $&"
              )}`}</BoxTelephone>
            </BoxDataAuthor>
          </BoxContent>
          <BoxList theme={theme}>
            <Ul theme={theme}>
              <Li theme={theme}>
                <ListTitle theme={theme}>email</ListTitle>
                <ListEmail theme={theme} href={`mailto:${content.email}`}>
                  {content.email}
                </ListEmail>
              </Li>
              <Li theme={theme}>
                <ListTitle theme={theme}>lokalizacja</ListTitle>
                <P theme={theme}>{`${content.locationCity}, ${content.locationCountry}`}</P>
              </Li>
              <Li theme={theme}>
                <ListTitle theme={theme}>wiek</ListTitle>
                <P theme={theme}>{`${old} lat`}</P>
              </Li>
            </Ul>
          </BoxList>
        </Box>
      </Row>
    </>
  )
}

// EXPORT NEW COMPONENT
export default BoxAuthorComponent
