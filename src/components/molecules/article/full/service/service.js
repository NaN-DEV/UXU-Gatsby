// IMPORT PLUGIN
import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"
import { Link, useStaticQuery, graphql } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../../../layouts/settings"

// IMPORT  STYLE
import {
  Article,
  BackgroundImage,
  BoxContent,
  MainTitle,
  BoxAuthorData,
  BoxAutorImg,
  BoxAutorName,
  BoxAddPostDate,
  BoxTag,
  BoxDataArticle,
  BoxExcerpt,
  StepListTitle,
  StepList,
  Step,
  StepTitle,
  StepMedia,
  StepImg,
  StepDescription,
  BoxHeader,
  BoxTextContent,
  BlockQuote,
} from "./style/style"

// IMPORT SETTINGS COMPONENT
import Row from "../../../../atoms/row/row"
import Icon from "../../../../atoms/icon/icon"
import Video from "../../../../atoms/video/video"
import List from "../../../list/list"
import Button from "../../../../atoms/button/button"

// CREATE NEW COMPONENT

const ArticleFullServiceComponent = props => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsContactDetail {
        telephone
      }
      image1: file(relativePath: { eq: "images/img-contact.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/img-send.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "images/img-repair.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "images/img-finish.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { content, services, blog, tutorial } = props

  let disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: content.id },
  }

  const telephone = `${data.datoCmsContactDetail.telephone}`
  return (
    <>
      <Article theme={theme}>
        <BackgroundImage theme={theme} fluid={content.mainImage.fixed} />
        <BoxContent theme={theme}>
          <MainTitle theme={theme}>{content.title}</MainTitle>
        </BoxContent>
        <BoxDataArticle theme={theme}>
          <BoxAuthorData theme={theme}>
            <BoxAutorImg to={`/author/${content.author.slug}`} theme={theme}>
              <Img
                fluid={content.author.avatar.fixed}
                title={`${content.author.firstName} ${content.author.lastName}`}
              />
            </BoxAutorImg>
            <BoxAutorName
              theme={theme}
            >{`${content.author.firstName} ${content.author.lastName}`}</BoxAutorName>
            <BoxAddPostDate theme={theme}>{content.meta.firstPublishedAt}</BoxAddPostDate>
          </BoxAuthorData>
          <BoxTag theme={theme}>
            {content.tag.map(tag => {
              return (
                <>
                  <Link
                    key={tag.id}
                    title={tag.name}
                    to={`/tag/${tag.slug}`}
                    style={{
                      color: `${tag.color.colorTxt.hex}`,
                      backgroundColor: `${tag.color.colorBackground.hex}`,
                    }}
                  >
                    <span>#</span>
                    {tag.name}
                  </Link>
                </>
              )
            })}
          </BoxTag>
        </BoxDataArticle>
        {content.content.map((item, index) => {
          if (item.__typename === "DatoCmsHeader") {
            return (
              <>
                <BoxDataArticle theme={theme}>
                  <BoxHeader theme={theme}>{item.header}</BoxHeader>
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsImage") {
            return (
              <>
                <BoxDataArticle theme={theme}>
                  <Img
                    fluid={item.image.fixed}
                    style={{ display: "block", margin: "1.5rem auto" }}
                  />
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsTextContent") {
            return (
              <>
                <BoxDataArticle theme={theme}>
                  <BoxTextContent
                    theme={theme}
                    dangerouslySetInnerHTML={{ __html: item.textContent }}
                  />
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsBlockQuote") {
            return (
              <>
                <BoxDataArticle theme={theme} blockquote>
                  <BlockQuote theme={theme} dangerouslySetInnerHTML={{ __html: item.content }} />
                </BoxDataArticle>
              </>
            )
          } else if (item.__typename === "DatoCmsVideo") {
            return (
              <>
                <BoxDataArticle theme={theme} video>
                  <Video big videoSrcURL={item.video.url} videoTitle={item.video.title} />
                </BoxDataArticle>
              </>
            )
          } else {
            return (
              <>
                <BoxDataArticle>{index}</BoxDataArticle>
              </>
            )
          }
        })}
        <BoxDataArticle theme={theme}>
          <StepList theme={theme}>
            <Step theme={theme}>
              <StepTitle theme={theme}>Krok 1 : Zgłoś się</StepTitle>
              <StepMedia theme={theme}>
                <StepImg fluid={data.image1.childImageSharp.fluid} theme={theme} />
              </StepMedia>
              <StepDescription theme={theme}>
                Przejdź do <Link to="/oddaj-do-naprawy"> oddaj do naprawy </Link> lub i postępuj
                według intrukcji odnośnie usługi {content.title.toLowerCase()} w punkcie pierwszym
                wybierz ,,naprawa"
              </StepDescription>
            </Step>
            <Step theme={theme}>
              <StepTitle theme={theme}>Krok 2 : Dostarczasz nam sprzęt</StepTitle>
              <StepMedia theme={theme}>
                <StepImg fluid={data.image2.childImageSharp.fluid} theme={theme} />
              </StepMedia>
              <StepDescription theme={theme}>
                Sprzet możesz nam dostarczyć na dwa różne sposoby , Osobiscie do jednego z naszych
                punktów lub my wyślemy do ciebie kuriera i odeślemy gdy ukończymy pracę.
              </StepDescription>
            </Step>
            <Step theme={theme}>
              <StepTitle theme={theme}>Krok 3 : {content.title}</StepTitle>
              <StepMedia theme={theme}>
                <StepImg fluid={data.image3.childImageSharp.fluid} theme={theme} />
              </StepMedia>
              <StepDescription theme={theme}>
                {`Gdy dotrze do nas twój sprzęt, ${content.title} potrwa do ${content.repairAverageTime} dni. Zazwyczaj usługę wykonujemy w ciągu 24h o ile mamy wszystkie materiały na stanie.`}
              </StepDescription>
            </Step>
            <Step theme={theme}>
              <StepTitle theme={theme}>Krok 4 : Rozliczamy się</StepTitle>
              <StepMedia theme={theme}>
                <StepImg fluid={data.image4.childImageSharp.fluid} theme={theme} />
              </StepMedia>
              <StepDescription theme={theme}>
                Po wykonaniu usługi odeślemy Ci sprzęt kurierem lub oddamy w punkcie zaraz po
                otrzymaniu opłaty.
              </StepDescription>
            </Step>
          </StepList>
          <DiscussionEmbed style={{ width: "100%" }} {...disqusConfig} />
        </BoxDataArticle>
      </Article>
    </>
  )
}

// EXPORT NEW COMPONENT
export default ArticleFullServiceComponent
