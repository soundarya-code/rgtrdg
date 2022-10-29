import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImagSlider() {
    let setting={
        dots:true,
        infinite:true,
        speed:50,
        slidToShow:1,
        slidToScroll:1,
        autoplay:true
    }
  return (
<Carosel {...setting}>
<Wrap>
    <img src="/images/slider-badging.jpg"/>
</Wrap>
<Wrap>
    <img src="/images/slider-badging.jpg"/>
</Wrap>
</Carosel>
  )
}

export default ImagSlider
const Carosel=styled(Slider)`

`
const Wrap=styled.div`
`