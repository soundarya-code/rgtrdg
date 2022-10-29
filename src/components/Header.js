import React from 'react'
import styled from 'styled-components'
import ImagSlider from './ImagSlider'
function Header() {
  return (
   <Nav>
 <Logo src="/images/logo.svg">
</Logo>
<NavMenu>
<a>
    <img src="/images/home-icon.svg" alt='not found'/>
    <span>Home</span>
</a>
<a>
    <img src="/images/search-icon.svg" alt='not found'/>
    <span>Search</span>
</a>
<a>
    <img src="/images/watchlist-icon.svg" alt='not found'/>
    <span>WatchList</span>
</a>
<a>
    <img src="/images/original-icon.svg" alt='not found'/>
    <span>Original</span>
</a>
<a>
    <img src="/images/movie-icon.svg" alt='not found'/>
    <span>Movies</span>
</a>
<a>
    <img src="/images/series-icon.svg" alt='not found'/>
    <span>Series</span>
</a>
</NavMenu>
<Userimg src="/images/user.png"/>
  


   </Nav>
  )
}

export default Header
const Nav=styled.nav`
height:70px;
background-color:black;
display:flex;
align-items:center;
padding :0 36px;`
const Logo=styled.img`
width:80px;

`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:20px;
cursor:pointer;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    text-transform:uppercase;
    img{
        height:35px;
    }
    span{
      font-size:20px;
      letter-spacing:1.24px;
      position:relative;
      &:after{
        content:"";
        height:2px;
        background:white;
        position:absolute;
        opacity:0;
     transform-origin:left center;
        left:0;
        right:0;
        bottom:-6px;
        transform:scaleX(0);
        transition:all 250ms  cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      }

      
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
    
}
`
const Userimg=styled.img`
width:40px;
height:40px;
border-radius:50%;
cursor:pointer;
`