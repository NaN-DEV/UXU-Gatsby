// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/theme/settings"

// IMPORT COMPONENT START
import Row from "../../../atoms/row/row"
import List from "../../../molecules/list/list"
import Button from "../../../atoms/button/button"

// IMPORT STYLES
import {
  Box,
  BoxDay,
  BoxPrice,
  BoxImage,
  BoxHeader,
  BoxContent,
  BoxDescription,
} from "./style/style"

// CREATE NEW COMPONENT START

const BoxComponent = props => {
  const { content, display } = props
  console.log(content)
  return (
    <>
      <Box display={display} theme={theme}>
        <BoxImage theme={theme}>
          <Img
            alt={content.mainImage.alt}
            title={content.mainImage.title}
            fluid={content.mainImage.fixed}
          />
        </BoxImage>
        <BoxContent theme={theme}>
          <BoxHeader theme={theme}>{content.title}</BoxHeader>
          <BoxPrice theme={theme}>
            <strong>Juz od : </strong>
            {content.fromPrice} PLN
          </BoxPrice>
          <BoxDay theme={theme}>
            <strong>Średni czas realizacji : </strong>
            {content.averageLeadTime} DNI
          </BoxDay>
          <BoxDescription theme={theme}>
            {content.excerpt.substr(0, 200)}...
          </BoxDescription>
          <Link to={`/uslugi//${content.slug}`}>Więcej</Link>
        </BoxContent>
      </Box>
    </>
  )
}

export default BoxComponent
