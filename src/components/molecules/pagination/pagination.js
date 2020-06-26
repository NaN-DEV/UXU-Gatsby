// IMPORT PLUGIN
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/settings"

// IMPORT SETTINGS COMPONENT
import { Ul, Li } from "./style/style"

// CREATE NEW COMPONENT

const PaginationComponent = props => {
  const { currentPage, numPages, showPages, slug } = props

  const showNumberPages = () => {
    const listButton = []
    for (let i = 0; numPages >= currentPage + i; i++) {
      if (showPages > i) {
        if (currentPage === 1) {
          listButton.push(
            <>
              {i + currentPage === currentPage ? (
                <>
                  <Li theme={theme} disablet>
                    <p>{i + currentPage}</p>
                  </Li>
                </>
              ) : (
                <>
                  <Li theme={theme}>
                    <Link to={`${slug}${i + currentPage <= 1 ? `` : `/${i + currentPage}`}`}>
                      {i + currentPage}
                    </Link>
                  </Li>
                </>
              )}
            </>
          )
        } else if (currentPage > 1 && showPages - 1 > i) {
          listButton.push(
            <>
              {i + currentPage === currentPage ? (
                <>
                  <Li theme={theme}>
                    <Link to={`${slug}${currentPage - 1 <= 1 ? `` : `/${currentPage - 1}`}`}>
                      {currentPage - 1}
                    </Link>
                  </Li>
                  <Li theme={theme} disablet>
                    <p>{i + currentPage}</p>
                  </Li>
                </>
              ) : (
                <>
                  <Li theme={theme}>
                    <Link to={`${slug}${i + currentPage <= 1 ? `` : `/${i + currentPage}`}`}>
                      {i + currentPage}
                    </Link>
                  </Li>
                </>
              )}
            </>
          )
        }
      }
    }
    return listButton
  }

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
              <Link to={`${slug}${currentPage === 2 ? `` : `/${currentPage - 1}`}`}>Wstecz</Link>
            </Li>
          </>
        )}

        {showNumberPages()}

        {currentPage === numPages ? (
          <>
            <Li theme={theme} disablet>
              <p>Dalej</p>
            </Li>
          </>
        ) : (
          <>
            <Li theme={theme}>
              <Link to={`${slug}${currentPage && `/${currentPage + 1}`}`}>Dalej</Link>
            </Li>
          </>
        )}
      </Ul>
    </>
  )
}

// EXPORT NEW COMPONENT
export default PaginationComponent

PaginationComponent.propTypes = {
  showPages: PropTypes.number,
}

PaginationComponent.defaultProps = {
  showPages: 3,
}
