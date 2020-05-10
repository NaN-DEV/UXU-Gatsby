// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"

// IMPORT STYLE
import GlobalStyle from "./theme/globalStyle"
import HeaderBox from "./theme/globalStyle"

// IMPORT SETTINGS STYLE
import theme from "./theme/settings"

// IMPORT COMPONENT
import Header from "../components/organisms/header/header"
import Footer from "../components/organisms/footer/footer"

const Root = props => {
  const { children } = props

  const FooterLink = [
    { id: "kontak-link", link: "/", title: "Kontakt" },
    { id: "regulamin-link", link: "/", title: "Regulamin" },
    {
      id: "Polityka-prywatności-link",
      link: "/",
      title: "Polityka Prywatności",
    },
  ]

  return (
    <StaticQuery
      query={graphql`
        query Layout {
          allDatoCmsMainSetting {
            nodes {
              footerLink {
                slug
                title
                id
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <GlobalStyle theme={theme} />
            <Header />
            {children}
            <Footer links={data.allDatoCmsMainSetting.nodes[0].footerLink} />
          </>
        )
      }}
    />
  )
}

export default Root
