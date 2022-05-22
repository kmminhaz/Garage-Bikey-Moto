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
                <span disabled>Director of Honda.</span>
              </h5>
              <p className='w-50 mx-auto py-3'>
                Nice place to store necessery items and supply. It has been 3
                years that i was supplying into this warehouse. It has never
                happend that the payment will be due. I am happy to be a part of
                business chain of grage bikey moto.
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
                This is a well known and well decorated warehouse. Here every
                product's are organized and kept up to date. items that are
                shortage around the world can easily be found here.
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
                <strong>K. M. Minhaz Uddin</strong>{" "}
                <span disabled>Chairman, Garage Bikey Moto</span>
              </h5>
              <p className='w-50 mx-auto py-3'>
                The items are kept so organized and simple manner that i feel
                proud that i work here and it gives me a great pleasur. We can
                assure you that or to any commpany that keeping inventories in
                this ware house and getting any product from this is going to be
                the total fresh and new.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
