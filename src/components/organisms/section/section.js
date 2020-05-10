import React from "react"

// IMPORT COMPONENT START
import Reviews from "./reviews/reviews"
import HeroHome from "./heroHome/heroHome"
import ListService from "./listService/listService"
import ListArticleCarusel from "./listArticleCarusel/listArticleCarusel"

// CREATE NEW COMPONENT
const SectionComponent = props => {
  const {
    content,
    sectionHeroHome,
    reviews,
    listService,
    listArticleCarusel,
    title,
  } = props
  return (
    <>
      {reviews && <Reviews secondary content={content} />}
      {listService && <ListService secondary content={content} />}
      {sectionHeroHome && <HeroHome secondary content={content} />}
      {listArticleCarusel && (
        <ListArticleCarusel secondary title={title} content={content} />
      )}
    </>
  )
}

export default SectionComponent
