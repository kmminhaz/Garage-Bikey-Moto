import { Carousel } from "react-bootstrap";
import image1 from '../../../images/carousel/image1.jpg';
import image2 from '../../../images/carousel/image2.jpg';
import image3 from '../../../images/carousel/image3.jpg';
import image4 from '../../../images/carousel/image4.jpg';
import image5 from '../../../images/carousel/image5.jpg';

const Banner = () => {

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
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image2}
            alt='Second slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
            alt='Third slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image4}
            alt='Third slide'
            height={500}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image5}
            alt='Third slide'
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
