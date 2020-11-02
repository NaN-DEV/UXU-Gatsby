// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"

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
const BoxHelpComponent = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query BoxHelp {
            allDatoCmsAutor {
              nodes {
                id
                slug
                nick
                email
                lastName
                firstName
                desciption
                locationCity
                locationCountry
                telephoneNumber
                birthday(formatString: "YYYY")
                avatar {
                  alt
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <Box theme={theme}>
                <BoxAuthor to={`/autor/${data.allDatoCmsAutor.nodes[0].slug}`}>
                  <BoxAutorImg>
                    <Img
                      fluid={data.allDatoCmsAutor.nodes[0].avatar.fixed}
                      title={`${data.allDatoCmsAutor.nodes[0].firstName} ${data.allDatoCmsAutor.nodes[0].lastName}`}
                    />
                  </BoxAutorImg>
                  <BoxAutorData>
                    <BoxAutorName>{`${data.allDatoCmsAutor.nodes[0].firstName} ${data.allDatoCmsAutor.nodes[0].lastName}`}</BoxAutorName>
                    <BoxAutorNick>{data.allDatoCmsAutor.nodes[0].nick}</BoxAutorNick>
                  </BoxAutorData>
                </BoxAuthor>
                <BoxDecription>Potrzebujesz pomocy ?</BoxDecription>

                <BoxButton>
                  <Button title="Pogadajmy" slug="kontakt" />
                </BoxButton>
              </Box>
            </>
          )
        }}
      />
    </>
  )
}

export default BoxHelpComponent
