import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fertilzer from "../UI/fertilizer.jpg";
import pesticide from "../UI/pestiside.jpg";
import seeds from "../UI/seed.jpg";

const Headercrousal = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            src={pesticide}
            className="d-block w-100"
            alt="pesticide"
            height="520vh"
          ></img>
          <Carousel.Caption>
          <h5 className='text-white'>Pesticide</h5>
          {/* <p className='text-white'>
            Pesticide
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={seeds} 
            alt="Second slide"
            height="520vh"
          />
          <Carousel.Caption>
          <h5 className='text-white'>Seeds</h5>
          {/* <p className='text-white'>
            Seeds
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fertilzer}
            alt="Third slide"
            height="520vh"
          />
          <Carousel.Caption>
          <h5 className='text-white'>Fertilizer</h5>
          {/* <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Headercrousal;
