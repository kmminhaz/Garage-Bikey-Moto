import React from 'react';
import Banner from './Banner/Banner';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <br /> <br /> <br /> <br />
        <InventoryItems></InventoryItems>
      </div>
    );
};

export default Home;