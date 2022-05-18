import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Container>
        <h2>Inventory Id : {id}</h2>
        <div>
          <img src='' alt='' className='' height={300} width={300} />
          <h3>Product Name</h3>
          <h4>Supplier Name</h4>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            similique amet, cum voluptates sed architecto veniam. Pariatur
            excepturi qui voluptatum assumenda a odio reiciendis, fugit fuga
            dolore voluptatem iure odit eum porro facere provident? Laudantium
            dolor beatae officiis soluta laboriosam ab fugiat? Nisi non eum
            magni optio corporis architecto asperiores temporibus accusantium,
            incidunt dicta animi error expedita minima ad. Non sit, illum eum
            cum repellendus perferendis laudantium. Adipisci a fugit unde
            reprehenderit debitis reiciendis magni quis totam cupiditate,
          </h5>
          <div>
              <h6>Price</h6>
              <h6>Quantity</h6>
          </div>
          <h4>Status</h4>
          <Button>Delivered</Button>
        </div>
      </Container>
    </div>
  );
};

export default Inventory;
