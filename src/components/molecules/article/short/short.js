// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT  STYLE
import {
  Article,
  BoxLink,
  BackgroundImage,
  BoxAutor,
  BoxAutorImg,
  BoxAutorData,
  BoxAutorName,
  BoxAutorNick,
  BoxTitle,
  BoxTag,
  BoxDescription,
  BoxFooter,
  BoxOption,
  BoxButtonMore,
  Danger,
  TxtDanger,
  Waring,
  TxtWaring,
  Succes,
  TxtSucces,
  Normal,
  TxtNormal,
} from "./style/style"

// IMPORT SETTINGS COMPONENT
import Row from "../../../atoms/row/row"
import Button from "../../../atoms/button/button"
import Icon from "../../../atoms/icon/icon"

// CREATE NEW COMPONENT

const ArticleShortComponent = props => {
  const { content, services, blog, tutorial } = props

  return (
    <>
      <Article theme={theme}>
        <BackgroundImage theme={theme} fluid={content.mainImage.fixed} />
        <BoxAutor
          theme={theme}
          to={`/autor/${content.author.slug}`}
          title={`${content.author.firstName} ${content.author.lastName}`}
        >
          <BoxAutorImg>
            <Img fluid={content.author.avatar.fixed} />
          </BoxAutorImg>
          <BoxAutorData theme={theme}>
            <BoxAutorName
              theme={theme}
            >{`${content.author.firstName} ${content.author.lastName}`}</BoxAutorName>
            <BoxAutorNick theme={theme}>{content.author.nick}</BoxAutorNick>
          </BoxAutorData>
        </BoxAutor>
        <BoxTitle
          theme={theme}
          to={
            services
              ? `/uslugi/artykul/${content.slug}`
              : `${
                  blog
                    ? `/blog/artykul/${content.slug}`
                    : `${tutorial && `/poradniki/artykul/${content.slug}`}`
                }`
          }
          title={content.title}
        >
          {content.title}
        </BoxTitle>
        <BoxTag theme={theme}>
          {content.tag.map(tag => {
            return (
              <>
                <Link
                  key={tag.id}
                  to={
                    services
                      ? `/tag/${tag.slug}/uslugi/`
                      : `${
                          blog ? `/tag/${tag.slug}` : `${tutorial && `/tag/${tag.slug}/poradniki/`}`
                        }`
                  }
                  title={tag.name}
                >
                  <span>#</span>
                  {tag.name}
                </Link>
              </>
            )
          })}
        </BoxTag>

        <BoxFooter>
          {services && (
            <BoxOption
              theme={theme}
              title={`Maksymalny czas naprawy : ${content.repairAverageTime} DNI`}
            >
              {`DO: ${content.repairAverageTime} DNI`}
            </BoxOption>
          )}
          {services && (
            <BoxOption theme={theme} title={`koszt usługi : ${content.repairCost} PLN`}>
              {`KOSZT : ${content.repairCost} PLN`}
            </BoxOption>
          )}
          {blog && (
            <BoxOption theme={theme} title={`opublikowno : ${content.meta.firstPublishedAt}`}>
              {`${content.meta.firstPublishedAt}`}
            </BoxOption>
          )}
          {tutorial && (
            <BoxOption
              theme={theme}
              title={`Poziom trudności : ${content.difficultyLevel === 3 && "Trudne"}`}
            >
              {content.difficultyLevel === 3 && (
                <>
                  <Danger theme={theme} />
                  <TxtDanger theme={theme}>Trudne</TxtDanger>
                </>
              )}
              {content.difficultyLevel === 2 && (
                <>
                  <Waring theme={theme} />
                  <TxtWaring theme={theme}>Średnie</TxtWaring>
                </>
              )}
              {content.difficultyLevel === 1 && (
                <>
                  <Succes theme={theme} />
                  <TxtSucces theme={theme}>Łatwe</TxtSucces>
                </>
              )}
            </BoxOption>
          )}
          {tutorial && (
            <BoxOption theme={theme} title={`Wymagany czas : ${content.repairTime} min.`}>
              <Icon clock /> {`Wymagany czas ${content.repairTime} min.`}
            </BoxOption>
          )}

          <BoxButtonMore>
            <Button
              slug={
                services
                  ? `/uslugi/artykul/${content.slug}`
                  : `${
                      blog
                        ? `/blog/artykul/${content.slug}`
                        : `${tutorial && `/poradniki/artykul/${content.slug}`}`
                    }`
              }
              title="Więcej"
            />
          </BoxButtonMore>
        </BoxFooter>
      </Article>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleShortComponent
