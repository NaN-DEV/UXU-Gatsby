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
  Tag,
  Year,
  Footer,
  Header,
  BoxTag,
  BoxData,
  BoxLeft,
  MonthDay,
  BoxRight,
  BoxImage,
  BoxAuthor,
  BoxCategory,
  Description,
} from "./style/style"

// CREATE NEW COMPONENT START

const BoxComponent = props => {
  const { content, display } = props
  console.log(content)
  return (
    <>
      <Box display={display} theme={theme} to={content.slug}>
        <BoxImage theme={theme}>
          {content.category &&
            content.category.map(item => {
              return (
                <>
                  <BoxCategory title={item.name} to={item.slug}>
                    {item.name}
                  </BoxCategory>
                </>
              )
            })}
          <Img
            className="img"
            alt={content.mainImage.alt}
            title={content.mainImage.title}
            fluid={content.mainImage.fixed}
            style={{ width: "100%" }}
          />
        </BoxImage>
        <BoxLeft>
          <BoxAuthor title={content.author.name} to={content.author.slug}>
            <Img
              alt={content.author.avatar.alt}
              title={content.author.avatar.title}
              fluid={content.author.avatar.fixed}
            />
          </BoxAuthor>
        </BoxLeft>
        <BoxRight>
          <Header theme={theme}>{content.title}</Header>
          {content.tag && (
            <>
              <BoxTag>
                {content.tag.map(tag => {
                  return (
                    <>
                      <Tag title={tag.name} to={tag.slug}>
                        {tag.name}
                      </Tag>
                    </>
                  )
                })}
              </BoxTag>
            </>
          )}
          <Description theme={theme}>
            {content.excerpt.substr(0, 200)}...
          </Description>
        </BoxRight>
        <Footer>
          <Link to={`/uslugi//${content.slug}`}>Czytaj dalej...</Link>
        </Footer>
      </Box>
    </>
  )
}

export default BoxComponent
