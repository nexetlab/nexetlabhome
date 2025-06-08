import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Slider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={2000}
      transitionTime={800}
      swipeable
      emulateTouch
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
          alt="Laptop Workspace"
        />
        <p className="legend">Laptop Workspace</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          alt="Code Interface"
        />
        <p className="legend">Code Interface</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
          alt="Digital Branding"
        />
        <p className="legend">Digital Branding</p>
      </div>
    </Carousel>
  )
}
