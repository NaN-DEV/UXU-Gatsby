// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT STYLES
import { SiteBar, Header, BoxSiteBar, SiteBarGlue, Step } from "./style/style"

// IMPORT COMPONENT START
import Box from "../../molecules/box/box"
import List from "../../molecules/list/list"
import Button from "../../atoms/button/button"

// CREATE NEW COMPONENT

const SiteBarComponent = props => {
  const {
    blog,
    socialMedia,
    tutorials,
    top,
    chat,
    team,
    tag,
    skill,
    share,
    glue,
    author,
    info,
    infoService,
    addRepair,
    repair,
    help,
  } = props
  const socialMediaLink = [
    { name: "Facebook", url: "https://www.facebook.com/UXUPL/" },
    { name: "YouTube", url: "https://www.instagram.com/uxu.pl/" },
    { name: "Instagram", url: "https://www.instagram.com/uxu.pl/" },
  ]
  const blogCategory = [
    { name: "Smartfony", slug: "blog/smartfony" },
    { name: "Tablety", slug: "blog/tablety" },
    { name: "Laptop", slug: "blog/laptop" },
    { name: "Pc", slug: "blog/pc" },
    { name: "Smartwatch", slug: "blog/smartwatch" },
  ]
  const tutorialsCategory = [
    { name: "Smartfony", slug: "poradniki/smartfony" },
    { name: "Tablety", slug: "poradniki/tablety" },
    { name: "Laptop", slug: "poradniki/laptop" },
    { name: "Pc", slug: "poradniki/pc" },
    { name: "Smartwatch", slug: "blog/smartwatch" },
  ]

  return (
    <>
      <StaticQuery
        query={graphql`
          query SiteBar {
            allDatoCmsContactDetail {
              nodes {
                socialMedia {
                  id
                  name
                  url
                }
              }
            }
            allDatoCmsBlogCategory {
              nodes {
                name
                slug
                id
              }
            }
            allDatoCmsTutorialsCategory {
              nodes {
                id
                slug
                name
              }
            }

            allDatoCmsTag {
              nodes {
                name
                slug
                id
              }
            }
            allDatoCmsAutor {
              nodes {
                id
                nick
                slug
                firstName
                lastName
              }
            }
            allDatoCmsSkil {
              nodes {
                name
                slug
                id
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <SiteBar theme={theme} top={top} {...props}>
                {blog && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Header theme={theme}>Na blogu</Header>
                      <List vertical hashtag blog items={data.allDatoCmsBlogCategory.nodes} />
                    </BoxSiteBar>
                  </>
                )}
                {socialMedia && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Header theme={theme}>Social media</Header>
                      <List icon items={data.allDatoCmsContactDetail.nodes[0].socialMedia} />
                    </BoxSiteBar>
                  </>
                )}
                {tutorials && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Header theme={theme}>Poradniki</Header>
                      <List
                        vertical
                        hashtag
                        tutorials
                        items={data.allDatoCmsTutorialsCategory.nodes}
                      />
                    </BoxSiteBar>
                  </>
                )}
                {share && addRepair && (
                  <>
                    <BoxSiteBar theme={theme} glue={glue} share={share}>
                      <List share items={share} />
                      <Button
                        small={true}
                        title="Oddaj do naprawy"
                        slug="oddaj-do-naprawy"
                        className="button none"
                      />
                    </BoxSiteBar>
                  </>
                )}
                {share && !addRepair && (
                  <>
                    <BoxSiteBar theme={theme} glue={glue} share={share}>
                      <List share items={share} />
                    </BoxSiteBar>
                  </>
                )}
                {team && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Header theme={theme}>Ekipa</Header>
                      <List vertical author items={data.allDatoCmsAutor.nodes} />
                    </BoxSiteBar>
                  </>
                )}
                {info && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Box info content={info} />
                    </BoxSiteBar>
                  </>
                )}
                {infoService && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Box infoService content={infoService} />
                    </BoxSiteBar>
                  </>
                )}
                {tag && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Header theme={theme}>Tagi</Header>
                      <List vertical hashtag tag items={data.allDatoCmsTag.nodes} />
                    </BoxSiteBar>
                  </>
                )}
                {skill && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Header theme={theme}>Umiejętności</Header>
                      <List vertical hashtag skill items={data.allDatoCmsSkil.nodes} />
                    </BoxSiteBar>
                  </>
                )}
                {repair && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Step theme={theme} first>
                        Co możemy dla Ciebie zrobić ?
                      </Step>
                      <Step theme={theme} second>
                        Jak nam dostarczysz sprzęt ?
                      </Step>
                      <Step theme={theme} third>
                        Idziesz jak burza ! Już konczymy:)
                      </Step>
                    </BoxSiteBar>
                  </>
                )}
                {help && (
                  <>
                    <BoxSiteBar glue={glue} theme={theme}>
                      <Box help />
                    </BoxSiteBar>
                  </>
                )}
              </SiteBar>
            </>
          )
        }}
      />
    </>
  )
}

// EXPORT NEW COMPONENT
export default SiteBarComponent
