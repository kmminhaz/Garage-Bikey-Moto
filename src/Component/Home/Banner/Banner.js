import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../../../images/carousel/image1.jpg';
import image2 from '../../../images/carousel/image2.jpg';
import image3 from '../../../images/carousel/image3.jpg';
import image4 from '../../../images/carousel/image4.jpg';
import image5 from '../../../images/carousel/image5.jpg';

const Banner = () => {
  // const [image, setImage] = useState([]);
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setImage(data.image));
  // }, []);

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image1}
            alt='First slide'
            height={500}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image2}
            alt='Second slide'
            height={500}
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
            alt='Third slide'
            height={500}
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur. 
            </p>
          </Carousel.Caption>*/}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image4}
            alt='Third slide'
            height={500}
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur. 
            </p>
          </Carousel.Caption>*/}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image5}
            alt='Third slide'
            height={500}
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur. 
            </p>
          </Carousel.Caption>*/}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
