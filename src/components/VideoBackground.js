import React, { Component } from "react"
import dogVid from "../assets/everydoghasitsday.mp4"

class VideoBackground extends Component {
  componentDidMount() {
    if (this.video) {
      this.video.addEventListener("loadeddata", () => {})
    }
  }
  componentWillUnmount() {
    if (this.video) {
      this.video.removeEventListener("loadeddata", () => {})
    }
  }
  render() {
    return (
      <video
        ref={ref => (this.video = ref)}
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0,
        }}
      >
        <source src={dogVid} type="video/mp4" />
      </video>
    )
  }
}

export default VideoBackground
