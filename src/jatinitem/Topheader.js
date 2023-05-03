import React,{ useState } from 'react'
import styled from 'styled-components'
import { selecCars } from '../Features/cars/car';
import { useSelector } from 'react-redux';

function Topheader() {
const [burgerStatus, setBurgerStatus] = useState(false);
const car = useSelector(selectCars)
console.log(car)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
      <a href="#">Model S</a>
      <a href="#">Model Y</a>
      <a href="#">Model 3</a>
      <a href="#">Model X</a>

      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <Customeopen>
        <a onClick={()=> setBurgerStatus(true)}>
        <img src="/images/menulogo.png" alt=""/>
        </a>
        </Customeopen>
      </RightMenu>
       <BurgerMenu show={burgerStatus}>
        <Closewrapper>
       <a onClick={()=> setBurgerStatus(false)}>
        <img src="/images/x.png" alt="" />
        </a>
        </Closewrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
       </BurgerMenu>
    </Container>
  );
};

export default Topheader

const Container = styled.div`
height:60px;
position:fixed;
top:0;
left:0;
right:0;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  padding: 0 10px;
  text-transform:uppercase;
  flex-wrap:nowrap;
}
@media (max-width:768px){
  display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  margin-right:10px;
  text-transform:uppercase;
  flex-wrap:nowrap;
}
img{
  margin-top:5px;
}
`
const BurgerMenu = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
list-style:none;
z-index:16;
padding:20px;
display:flex;
flex-direction:column;
text-align: start;
transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.4s;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
  
  a{
    font-weight:600;
  }
}
`
const Closewrapper = styled.div`
display:flex;
justify-content:flex-end;
img{
  width:19px;
  height:19px;
  cursor:pointer;
}
`
const Customeopen = styled.div`
cursor:pointer;
`