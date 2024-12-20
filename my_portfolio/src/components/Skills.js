// @ts-nocheck

import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return (
  <section className="skill" id="skills">
    <Container>
      <Row>
        <Col>
          <div className="skill-bx">
            <h2>
              My Skills
            </h2>
            <p>This is how I rate myself on different points, but there is always somewhere I could improve.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div>
                <img src={meter1} alt="Image"/>
                <h5>Experience with PHP</h5>
              </div>
              <div>
                <img src={meter2} alt="Image"/>
                <h5>Working with Laravel</h5>
              </div>
              <div>
                <img src={meter3} alt="Image"/>
                <h5>Working with Tailwind and bootstrap</h5>
              </div>
              <div>
                <img src={meter1} alt="Image"/>
                <h5>Experience with Javascript</h5>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)
}