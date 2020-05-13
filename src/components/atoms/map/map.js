import React from "react"

export class MapComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: this.props.marker,
    }
    this.addScriptGoogleAPI = this.addScriptGoogleAPI.bind(this)
    this.initMap = this.initMap.bind(this)
  }

  addScriptGoogleAPI(api) {
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${api}&callback=initMap`
    script.async = true
    document.body.appendChild(script)
  }

  initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 }
    // The map, centered at Uluru
    var map = new google.maps.Map(document.body.getElementById("map"), {
      zoom: 4,
      center: uluru,
    })
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map })
  }

  componentDidMount() {
    // ADD SCRIPT GOOGLE MAPS API
    this.initMap()
    this.addScriptGoogleAPI("AIzaSyA8AvdEYBYWC4FJReiRHZbTMfdbzHtr6MM")
  }

  render() {
    return (
      <>
        <div style={{ width: "100%", height: "100%" }} id="map"></div>
      </>
    )
  }
}

export default MapComponent
