import React from 'react';
import './ShoppingPage.css'; // Import the CSS for styling

const ShoppingPage = () => {
  return (
    <div className="shopping-page">
        <h2 className='page-heading'>Shop with us!</h2>
      <div className="product-container">
        {/* First Product Box */}
        <div className="product-box">
          <img
            src="https://images.unsplash.com/photo-1609216970211-cc9814865e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1ldGh5c3QlMjBjcnlzdGFsfGVufDB8fDB8fHww"
            alt="Crystal 1"
            className="product-image"
          />
          <p className="product-description">
            Beautiful amethyst crystal, known for its healing properties and spiritual clarity.
          </p>
          <div className="button-group">
            <button className="cart-button">Add to Cart</button>
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
        </div>

        {/* Second Product Box */}
        <div className="product-box">
          <img
            src="https://images.unsplash.com/photo-1620985828427-52189e3fe1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l0cmluZSUyMGNyeXN0YWx8ZW58MHx8MHx8fDA%3D"
            alt="Crystal 2"
            className="product-image"
          />
          <p className="product-description">
            Citrine crystal, renowned for bringing wealth, prosperity, and positivity.
          </p>
          <div className="button-group">
            <button className="cart-button">Add to Cart</button>
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
        </div>

        {/* Third Product Box */}
        <div className="product-box">
          <img
            src="https://plus.unsplash.com/premium_photo-1664640458601-cc5634a9ba03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHJvc2UlMjBxdWFydHolMjBjcnlzdGFsfGVufDB8fDB8fHww"
            alt="Crystal 3"
            className="product-image"
          />
          <p className="product-description">
            Rose quartz crystal, associated with love and emotional healing.
          </p>
          <div className="button-group">
            <button className="cart-button">Add to Cart</button>
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
