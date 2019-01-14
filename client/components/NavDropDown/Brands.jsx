import React from 'react';

const Brands = props => {
  let newBrand = props.brands.filter((brand, index) => index < 5);
  let featured = props.brands.filter(
    (brand, index) => index >= 5 && index < 10
  );
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>
          <a href="/product">Brands A-Z</a>
        </h4>
        <h4>
          <a href="/product">Sephora Collection</a>
        </h4>
        <h4>New Brands</h4>
        <div>
          {newBrand.map((brand, i) => (
            <div key={i}>
              <a href="/product">{brand}</a>
            </div>
          ))}
        </div>
        <h4>Featured Brands</h4>
        {featured.map((brand, i) => (
          <div key={i}>
            <a href="/product">{brand}</a>
          </div>
        ))}
      </div>
      <img src="https://imgur.com/VwaXlt8.jpg" />
      <div className="column">
        <img src="https://imgur.com/DuIFHwM.jpg" />
      </div>
      <div className="column">
        <img src="https://imgur.com/c9lN5iZ.jpg" />
        <img src="https://imgur.com/c9lN5iZ.jpg" />
      </div>
    </div>
  );
};
export default Brands;
