import React from 'react'
import styled from 'styled-components'
import Sectionpart from "./Sectionpart"
function Homepart() {
  return (
    <Container>
      <Sectionpart 
       title="Model S"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-s.jpg"
       leftBtnText="custom Order"
       rightBtnText="Existing Inventory"
      />
      <Sectionpart 
      title="Model y"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="custom Order"
      rightBtnText="Existing Inventory"
      />
      <Sectionpart 
      title="Model 3"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="custom Order"
      rightBtnText="Existing Inventory"
      />
      <Sectionpart 
      title="Model X"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="custom Order"
      rightBtnText="Existing Inventory"
      />
      <Sectionpart 
      title="Lowest Cost Solar Panels In America"
      description="Money-back guarantee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn more"
      />
      <Sectionpart 
      title="Solar For New Roofs"
      description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn more"
      />
      <Sectionpart 
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Order Now"
      />
    </Container>
  )
}

export default Homepart
const Container = styled.div`
   height: 100vh;

`