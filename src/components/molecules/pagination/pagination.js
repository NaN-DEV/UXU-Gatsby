// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li } from "./style/style"

// CREATE NEW COMPONENT

const PaginationComponent = props => {
  const { currentPage, numPages, slug } = props
  return (
    <>
      <Ul theme={theme} {...props}>
        {currentPage === 1 ? (
          <>
            <Li theme={theme} disablet>
              <p>Wstecz</p>
            </Li>
          </>
        ) : (
          <>
            <Li theme={theme}>
              <Link to={`/${slug}${currentPage === 2 ? `` : `/${currentPage - 1}`}`}>Wstecz</Link>
            </Li>
          </>
        )}

        {currentPage === numPages ? (
          <>
            <Li theme={theme} disablet>
              <p>Dalej</p>
            </Li>
          </>
        ) : (
          <>
            <Li theme={theme}>
              <Link to={`/${slug}${currentPage && `/${currentPage + 1}`}`}>Dalej</Link>
            </Li>
          </>
        )}
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default PaginationComponent
