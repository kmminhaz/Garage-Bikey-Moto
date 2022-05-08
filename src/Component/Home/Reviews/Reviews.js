import React from "react";
import { Carousel } from "react-bootstrap";
import imageCustomer1 from "../../../images/users/customer-1.png";
import imageCustomer2 from "../../../images/users/customer-2.png";
import imageCustomer3 from "../../../images/users/customer-3.png";

const Reviews = () => {
  return (
    <div>
      <h2 className='py-4 fw-bold'>Appreciation's</h2>
      <Carousel>
        <Carousel.Item>
          <div>
            <div className='w-25 mx-auto'>
              <img
                className='d-block w-25 mx-auto py-2'
                src={imageCustomer1}
                alt='First slide'
              />
            </div>
            <div className='pt-4'>
              <h5>
                <strong>Mr. Fokre Korim,</strong>{" "}
                <span disabled>Director of Ramsey & Co.</span>
              </h5>
              <p className='w-50 mx-auto py-3'>
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml
                ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non,
                semper suscipit, posuere a, pede. Donec nec justo eget felis
                facilisis fermentum. Aliquam porttitor mauris sit amet orci.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className='w-25 mx-auto'>
              <img
                className='d-block w-25 mx-auto py-2'
                src={imageCustomer2}
                alt='First slide'
              />
            </div>
            <div className='pt-4'>
              <h5>
                <strong>Mr. Fokre Korim,</strong>{" "}
                <span disabled>Director of Ramsey & Co.</span>
              </h5>
              <p className='w-50 mx-auto py-3'>
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml
                ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non,
                semper suscipit, posuere a, pede. Donec nec justo eget felis
                facilisis fermentum. Aliquam porttitor mauris sit amet orci.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className='w-25 mx-auto'>
              <img
                className='d-block w-25 mx-auto py-2'
                src={imageCustomer3}
                alt='First slide'
              />
            </div>
            <div className='pt-4'>
              <h5>
                <strong>Mr. Fokre Korim,</strong>{" "}
                <span disabled>Director of Ramsey & Co.</span>
              </h5>
              <p className='w-50 mx-auto py-3'>
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml
                ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non,
                semper suscipit, posuere a, pede. Donec nec justo eget felis
                facilisis fermentum. Aliquam porttitor mauris sit amet orci.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
