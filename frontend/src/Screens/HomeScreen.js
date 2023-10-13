import React, { useEffect, useReducer, useState } from 'react';
// import data from '../data';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logger from 'use-reducer-logger';
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, productsData: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
}

export default function HomeScreen() {
  // const [productsData, setProductsData] = useState([]);
  const [{ loading, error, productsData }, dispatch] = useReducer(
    logger(reducer),
    {
      productsData: [],
      loading: true,
      error: '',
    }
  );
  useEffect(() => {
    const fetchProductsData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/products/api');
        // setProductsData(result.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchProductsData();
  }, []);
  return (
    <div>
      <div className="product-nav">
        <h1>Featured Products</h1>
        <Link to={'/products/top-rated'}>Top Rated</Link>
        <Link to={'/products/best-selling'}>Best Selling</Link>
        <Link to={'/products/latest-products'}>Latest Products</Link>
      </div>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          productsData.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}
