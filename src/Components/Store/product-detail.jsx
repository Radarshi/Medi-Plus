import { useState } from 'react';
import '../../Styles/Store/productDetail.css';

const Products = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  }
}

const product = {
  id: 'MED00123',
  name: 'CuraSafe Liver Care Tablets',
  price: 189.50,
  originalPrice: 245.00,
  discount: 23,
  rating: 4.7,
  reviewCount: 742,
  stockStatus: 'In Stock',
  sku: 'MED-LV-123',
  brand: 'CuraPharma',
  images: [
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400'
  ],
  packSizes: ['60', '100', '200'],
  ageGroup: ['12-18', '18-60', 'All Age Groups'],
  keyFeatures: [
    'Helps maintain healthy liver function',
    'Supports natural liver detoxification',
    'Contains natural herbal extracts',
    'Free from artificial preservatives',
    'Vegetarian friendly formula'
  ],
  description: 'CuraSafe Liver Care Tablets are specially formulated to support healthy liver function and promote natural detoxification processes. These tablets contain a proprietary blend of herbal extracts traditionally known for their hepatoprotective properties.',
  usage: 'Take 1-2 tablets twice daily after meals or as directed by your healthcare professional. For best results, use consistently for at least 4-6 weeks.',
  ingredients: 'Milk Thistle Extract (80% Silymarin), Dandelion Root Extract, Artichoke Leaf Extract, Turmeric Root Extract (95% Curcuminoids), Ginger Root Extract, Cellulose (Plant fiber), Vegetable Magnesium Stearate.',
  warnings: 'Keep out of reach of children. Not intended for use during pregnancy or nursing. If you have a medical condition or are taking medications, consult your healthcare professional before use.',
  manufacturerInfo: {
    name: 'CuraPharma Laboratories Ltd.',
    address: '123 Health Avenue, Medicity, MC 54321',
    license: 'FDA-LIC-12345',
    gmp: 'ISO 9001:2015 Certified'
  },
  batchDetails: {
    batchNumber: 'CPL22409B',
    mfgDate: '2024-08-15',
    expiryDate: '2026-08-14',
  },
  storageInstructions: 'Store in a cool, dry place below 30°C (86°F). Protect from direct sunlight and moisture.',
  offers: [
    { code: 'MEDI10', description: 'Get extra 10% Off on all CuraPharma products' },
    { code: 'CASHBACK', description: 'Get Upto ₹100 cashback using UPI payment' },
    { code: 'FREESHIP', description: 'Free shipping on orders above ₹499' }
  ]
};

const Product  = () => {
     return(
        <>
        <div className="product-layout">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <span className="discount-badge">{product.discount}% OFF</span>
                <img src={product.images[0]} alt={product.name} />
                <div className="zoom-icon">🔍</div>
              </div>
              
              <div className="thumbnail-list">
                {product.images.map((img, index) => (
                  <div key={index} className={`thumbnail ${index === 0 ? 'active' : ''}`}>
                    <img src={img} alt={`${product.name} - View ${index + 1}`} />
                  </div>
                ))}
              </div>
              
              <div className="share-buttons">
                <div className="share-title">Share:</div>
                <div className="share-buttons">
                  <div className="share-btn facebook">f</div>
                  <div className="share-btn twitter">t</div>
                  <div className="share-btn pinterest">p</div>
                  <div className="share-btn whatsapp">w</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-meta">
                <div className="product-brand">
                  <span className="brand-icon">®</span>
                  <a href="#" className="brand-link">{product.brand}</a>
                </div>
                <div className="meta-divider"></div>
                <div className="product-sku">SKU: {product.sku}</div>
              </div>
              
              <div className="ratings-container">
                <div className="rating-stars">
                  {/* {renderStars(product.rating)} */}
                </div>
                <a href="#reviews" className="rating-count">{product.rating} out of 5 ({product.reviewCount} reviews)</a>
              </div>
              
              <div className="price-container">
                <div className="price-row">
                  <div className="current-price">₹{product.price.toFixed(2)}</div>
                  <div className="old-price">₹{product.originalPrice.toFixed(2)}</div>
                  <div className="save-amount">Save ₹{(product.originalPrice - product.price).toFixed(2)}</div>
                </div>
                <div className="tax-info">Inclusive of all taxes</div>
              </div>
              
              <div className="stock-info">
                <div className="stock-badge in-stock">{product.stockStatus}</div>
                <div className="delivery-info">
                  <div className="delivery-icon">🚚</div>
                  <div className="delivery-text">
                    <strong>Delivery by Tomorrow</strong>, before 9:00 PM
                  </div>
                </div>
              </div>
              
              <div className="key-features">
                <div className="feature-title">Key Benefits</div>
                <ul className="feature-list">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="variants-section">
                <div className="variant-title">Pack Size</div>
                <div className="variant-options">
                  {product.packSizes.map((size) => (
                    <div
                      key={size}
                      className='variant-option'
                    >
                      {size} Tablets
                    </div>
                  ))}
                </div>
                
                <div className="variant-title">Age Group</div>
                <div className="variant-options">
                  {product.ageGroup.map((age) => (
                    <div
                      key={age}
                      className='variant-option'
                    >
                      {age}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="quantity-selector">
                <div className="quantity-title">Quantity:</div>
                <div className="quantity-controls">
                  <button className="quantity-btn" >-</button>
                  <input type="number" className="quantity-input"  readOnly />
                  <button className="quantity-btn">+</button>
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="btn btn-primary">
                  <span className="btn-icon">🛒</span> Add to Cart
                </button>
                <button className="btn btn-outline">
                  <span className="btn-icon">⚡</span> Buy Now
                </button>
                <button className="btn btn-outline btn-icon-only">❤️</button>
              </div>
              
              <div className="offers-block">
                <div className="offers-title">
                  <span className="offers-icon">🎁</span>
                  Available Offers
                </div>
                <ul className="offer-list">
                  {product.offers.map((offer, index) => (
                    <li key={index} className="offer-item">
                      <div className="offer-badge">{offer.code.substring(0, 4)}</div>
                      <div className="offer-text">
                        {offer.description} <span className="offer-code">Code: {offer.code}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="product-meta-info">
                <div className="meta-row">
                  <div className="meta-label">Manufacturer:</div>
                  <div className="meta-value">{product.manufacturerInfo.name}</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Expiry Date:</div>
                  <div className="meta-value">{product.batchDetails.expiryDate}</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Country of Origin:</div>
                  <div className="meta-value">India</div>
                </div>
              </div>
            </div>
            </div>
        </>
     )
}

export default Product;