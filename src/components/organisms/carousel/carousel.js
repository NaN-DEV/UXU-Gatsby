// IMPORT PLUGIN
import React from "react"

// IMPORT GRAPHIV SVG
import Arrow from "../../../assets/icon/arrow-down.svg"

// IMPORT SETTINGS STYLE
import theme from "../../../layouts/theme/settings"

import {
  Button,
  Carousel,
  BoxButton,
  CarouselItem,
  CarouselContainer,
} from "./style/style"

// IMPORT COMPONENT START
import Row from "../../atoms/row/row"

// IMPORT STYLES

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showItem: 1,
      marginItem: 15,
      currentItem: 1,
      boxCaruselWidth: 0,
      breakPoint: this.props.breakPoint
        ? { ...this.props.breakPoint }
        : {
            mobile: 425,
            tablet: 768,
            desctop: 1024,
          },
      boxItemWidth: 0,
      boxTransform: 0,
      boxContainerWidth: 0,
      speed: this.props.speed || 500,
      showArrow: this.props.showArrow || false,
      allItems: this.props.children.length || 0,
      showBackArrow: false,
      showNextArrow: false,
    }
    this.backSlide = this.backSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.rwdCarusel = this.rwdCarusel.bind(this) //
    this.calculateWidthItem = this.calculateWidthItem.bind(this)
    this.calculateWidthContainer = this.calculateWidthContainer.bind(this)
  }

  // Updates carousel container width
  calculateWidthContainer(boxItemWidth, howManyItems, spaceItem) {
    this.setState({
      boxContainerWidth: boxItemWidth * howManyItems + howManyItems * spaceItem,
    })
  }

  // Updates carousel item width
  calculateWidthItem(
    spaceItem,
    boxCaruselWidth,
    allItems,
    howManyItemsToDisplayAtOnce
  ) {
    let boxItemWidth =
      (boxCaruselWidth - (howManyItemsToDisplayAtOnce - 1) * spaceItem) /
      howManyItemsToDisplayAtOnce

    this.calculateWidthContainer(boxItemWidth, allItems, spaceItem)
    this.setState({
      boxItemWidth: boxItemWidth,
      showItem: howManyItemsToDisplayAtOnce,
    })
  }

  // Updates all carousel parameters
  rwdCarusel() {
    //Check props
    if (!!this.props.showItem) {
      // checking break point for mobile
      if (window.innerWidth <= this.state.breakPoint.mobile) {
        this.calculateWidthItem(
          15,
          this.carouselBox.getBoundingClientRect().width,
          this.state.allItems,
          this.props.showItem.mobile
        )
      }
      // checking break point for tablet
      else if (window.innerWidth <= this.state.breakPoint.tablet) {
        this.calculateWidthItem(
          15,
          this.carouselBox.getBoundingClientRect().width,
          this.state.allItems,
          this.props.showItem.tablet
        )
      }
      // checking break point for desctop
      else {
        this.calculateWidthItem(
          15,
          this.carouselBox.getBoundingClientRect().width,
          this.state.allItems,
          this.props.showItem.desctop
        )
      }
    }
    // checking break point for all media
    else {
      this.calculateWidthItem(
        15,
        this.carouselBox.getBoundingClientRect().width,
        this.state.allItems,
        this.state.showItem
      )
    }
  }

  // BACK SLIDE
  backSlide() {
    const {
      currentItem,
      boxItemWidth,
      boxTransform,
      showBackArrow,
      showNextArrow,
    } = this.state
    if (currentItem > 1) {
      this.setState({
        showBackArrow: true,
        showNextArrow: true,
        currentItem: currentItem - 1,
        boxTransform: boxTransform - boxItemWidth - 15,
      })
    } else {
      this.setState({
        showNextArrow: true,
        showBackArrow: false,
      })
    }
  }

  // NEXT SLIDE
  nextSlide() {
    const {
      showItem,
      allItems,
      currentItem,
      boxTransform,
      boxItemWidth,
      showBackArrow,
      showNextArrow,
    } = this.state
    if (allItems - showItem + 1 > currentItem) {
      this.setState({
        showBackArrow: true,
        showNextArrow: true,
        currentItem: currentItem + 1,
        boxTransform: boxTransform + boxItemWidth + 15,
      })
    } else {
      this.setState({
        showBackArrow: true,
        showNextArrow: false,
      })
    }
  }

  componentDidMount() {
    this.rwdCarusel("sart")
    window.removeEventListener("resize", this.rwdCarusel, true)
    this.setState({
      showBackArrow: this.state.currentItem > 1,
      showNextArrow:
        this.state.allItems - this.state.showItem + 1 > this.state.currentItem,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.rwdCarusel, true)
  }

  render() {
    const {
      speed,
      allItems,
      showArrow,
      currentItem,
      boxTransform,
      boxItemWidth,
      showBackArrow,
      showNextArrow,
      boxContainerWidth,
    } = this.state
    const { secondary, children } = this.props

    return (
      <Carousel
        ref={div => {
          this.carouselBox = div
        }}
      >
        {showArrow && allItems > 1 && (
          <BoxButton theme={theme}>
            <Button
              back
              theme={theme}
              title="Poprzedni slajd"
              onClick={this.backSlide}
              secondary={secondary ? 1 : 0}
              style={showBackArrow ? { display: "block" } : { display: "none" }}
            >
              <Arrow />
            </Button>
            <Button
              next
              theme={theme}
              title="Następny slajd"
              onClick={this.nextSlide}
              secondary={secondary ? 1 : 0}
              style={showNextArrow ? { display: "block" } : { display: "none" }}
            >
              <Arrow />
            </Button>
          </BoxButton>
        )}

        <CarouselContainer
          style={{
            opacity: "1",
            width: `${boxContainerWidth}px`,
            transform: `translate3d(-${boxTransform}px, 0px, 0px)`,
          }}
          animationSpeed={speed}
          ref={div => {
            this.carouselContainer = div
          }}
        >
          {children.map((item, i) => {
            return (
              <CarouselItem
                style={{
                  width: `${boxItemWidth}px`,
                  marginRight: `15px`,
                }}
                key={i}
              >
                {item}
              </CarouselItem>
            )
          })}
        </CarouselContainer>
      </Carousel>
    )
  }
}

export default CarouselComponent
