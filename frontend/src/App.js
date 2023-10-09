import data from './data.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">MernShop</a>
      </header>
      <main>
        <div className="product-nav">
          <h1>Featured Products</h1>
          <a href="/products/top-rated">Top Rated</a>
          <a href="/products/best-selling">Best Selling</a>
          <a href="/products/latest-products">Latest Products</a>
        </div>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.name}>
              <a href={`/product/${product.name}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.name}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
