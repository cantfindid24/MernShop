import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
export default function HomeScreen() {
  return (
    <div>
      <div className="product-nav">
        <h1>Featured Products</h1>
        <Link to={'/products/top-rated'}>Top Rated</Link>
        <Link to={'/products/best-selling'}>Best Selling</Link>
        <Link to={'/products/latest-products'}>Latest Products</Link>
      </div>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.name}>
            <Link to={`/product/${product.name}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.name}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
