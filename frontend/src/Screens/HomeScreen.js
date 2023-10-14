import React, { useEffect, useReducer } from 'react';
// import data from '../data';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Components/Product';

// import logger from 'use-reducer-logger';Removed it becoz it is not compatible with react-bootstrap. Also Uninstall it
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
  const [{ loading, error, productsData }, dispatch] = useReducer(reducer, {
    productsData: [],
    loading: true,
    error: '',
  });
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
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {Array.isArray(productsData) &&
              productsData.map((product) => (
                <Col key={product.name} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}
