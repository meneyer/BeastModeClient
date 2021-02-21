import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import Image1 from "../assets/Megs1.jpg";
import Image2 from "../assets/JumpingOverFire.png";
import Image3 from "../assets/ocrRope.png";
import Image4 from "../assets/Megs2.jpg";

const BeforeLogin = () => {
  return (
    <>
    <div id="heroIntro">
        <p className="intro">Prepare.Yourself</p>
    </div>
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={true}
        interval={6000}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={Image1} alt="First slide" />
              {/* d-flex align-items-center justify-content-center min-vh-100 */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={Image2} alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={Image3} alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src={Image4} alt="Fourth slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </>
  );
};

export default BeforeLogin;
