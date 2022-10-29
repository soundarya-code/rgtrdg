import React from 'react'
import styled from 'styled-components'
import ImagSlider from './ImagSlider'

function Home() {
  return (
 <Container>
<ImagSlider/>
 </Container>
  )
}

export default Home
const Container=styled.main`

padding:0 calc(3.5vw+5px);
position:relative;

&:before{
  background:url("/images/bg.jpg");
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  buttom:0;
  z-index:-1;
}
`