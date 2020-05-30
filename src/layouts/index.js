// IMPORT PLUGIN
import React from "react"

// IMPORT STYLE
import GlobalStyle from "./theme/globalStyle"

// IMPORT SETTINGS STYLE
import theme from "./settings"

// IMPORT COMPONENT

// IMPORT COMPONENT
import Row from "../components/atoms/row/row"
import Box from "../components/molecules/box/box"
import Header from "../components/organisms/header/header"
import Footer from "../components/organisms/footer/footer"
import SideBar from "../components/organisms/siteBar/siteBar"
import Section from "../components/organisms/section/section"

// CREATE NEW COMPONENT

const Root = props => {
  const { children, siteBar, boxAds, author, content, share, info, infoService } = props

  if (siteBar === "home") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box ads content={content} />
        <Row>
          <SideBar socialMedia desctop blog tutorials top={9} />
          <Section>{children}</Section>
          <SideBar chat team desctop tag top={9} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "serviceCategory") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box ads content={content} />
        <Row>
          <SideBar socialMedia desctop blog tutorials top={9} />
          <Section>{children}</Section>
          <SideBar chat team tag desctop top={9} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "serviceArticle") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Row>
          <SideBar share={share} addRepair glue top={1.5} />
          <Section>{children}</Section>
          <SideBar infoService={infoService} glue desctop top={1.5} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "blogCategory") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box ads content={content} />
        <Row>
          <SideBar blog desctop top={2.4} />
          <Section>{children}</Section>
          <SideBar socialMedia team tag desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "blogArticle") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Row>
          <SideBar share glue desctop top={1.5} />
          <Section>{children}</Section>
          <SideBar info={info} glue desctop top={1.5} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "tutorialCategory") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box ads content={content} />
        <Row>
          <SideBar desctop tutorials top={2.4} />
          <Section>{children}</Section>
          <SideBar socialMedia team tag desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "tutorialArticle") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box ads content={content} />
        <Row>
          <SideBar desctop tutorials top={2.4} />
          <Section>{children}</Section>
          <SideBar socialMedia author tag desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "author") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box author content={content} />
        <Row>
          <SideBar skill desctop top={2.4} />
          <Section>{children}</Section>
          <SideBar desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "tag") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box tag content={content} />
        <Row>
          <SideBar desctop top={2.4} />
          <Section>{children}</Section>
          <SideBar desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "skill") {
    return (
      <>
        <GlobalStyle theme={theme} />
        <Header />
        <Box skill content={content} />
        <Row>
          <SideBar team desctop top={2.4} />
          <Section>{children}</Section>
          <SideBar desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else if (siteBar === "contact") {
    return (
      <>
        <GlobalStyle theme={theme} contact />
        <Header />
        <Box ads content={content} />
        <Row>
          <SideBar team desctop top={2.4} />
          <Section>{children}</Section>
          <SideBar desctop top={2.4} />
        </Row>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <p>error templetes</p>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default Root
