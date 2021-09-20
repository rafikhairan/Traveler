import React from "react";
import Bus from "../../images/bus.svg"
import Plane from "../../images/airplane.svg"
import Train from "../../images/train.svg"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Bus} />
            <ServicesH2>Bus</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Plane} />
            <ServicesH2>Plane</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Train} />
            <ServicesH2>Train</ServicesH2>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
