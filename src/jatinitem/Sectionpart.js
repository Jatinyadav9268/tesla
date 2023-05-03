import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Sectionpart({ title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade left>
      <Inertext>
        <h1>{title}</h1>
        <p>{description}</p>
      </Inertext>
      </Fade>
      <Buttons>
        <Fade right>
      <ButtonGroup>
        <Leftbutton>
           {leftBtnText}
        </Leftbutton>
        {rightBtnText &&
        <Rightbutton>
          {rightBtnText}
        </Rightbutton>
        }
      </ButtonGroup>
      </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>

    </Wrap>
  );
};

export default Sectionpart

const Wrap = styled.div`
width:100%;
height:100vh;
background-color:transparent;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}")`}
`
const Inertext = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:0px;
@media (max-width:768px) {
    flex-direction:column;
}


`
const Leftbutton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    margin:10px;
    cursor:pointer;
     
`
const Rightbutton = styled(Leftbutton)`
background-color:white;
color:black;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
overflow-x: hidden;
animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`


`