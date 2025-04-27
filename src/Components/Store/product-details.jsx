import "../../Styles/Store/productDetail.css";

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
  

const Detail = () => {
    return(
        <>
        <div className="product-page">

      {/* Main Content */}
      <main className="main">
        <div className="container">

          {/* Product Tabs */}
          <div className="product-tabs">
            <div className="tabs-header">
              <div 
                className={`tab-item ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </div>
              <div 
                className={`tab-item ${activeTab === 'information' ? 'active' : ''}`}
                onClick={() => setActiveTab('information')}
              >
                Product Information
              </div>
              <div 
                className={`tab-item ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviewCount})
              </div>
              <div 
                className={`tab-item ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipping')}
              >
                Shipping & Returns
              </div>
            </div>
            
            {/* Description Tab Content */}
            <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
              <div className="product-description">
                <div className="description-section">
                  <h3 className="section-title">Overview</h3>
                  <p className="description-text">{product.description}</p>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Key Benefits</h3>
                  <ul className="description-list">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Directions for Use</h3>
                  <p className="description-text">{product.usage}</p>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Ingredients</h3>
                  <p className="description-text">{product.ingredients}</p>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Safety Information</h3>
                  <p className="description-text">{product.warnings}</p>
                  <p className="description-text">{product.storageInstructions}</p>
                </div>
              </div>
            </div>
            
            {/* Information Tab Content */}
            <div className={`tab-content ${activeTab === 'information' ? 'active' : ''}`}>
              <div className="info-grid">
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">🏭</span>
                    Manufacturer Information
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Name</td>
                        <td className="info-value">{product.manufacturerInfo.name}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Address</td>
                        <td className="info-value">{product.manufacturerInfo.address}</td>
                      </tr>
                      <tr>
                        <td className="info-label">License No.</td>
                        <td className="info-value">{product.manufacturerInfo.license}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Certification</td>
                        <td className="info-value">{product.manufacturerInfo.gmp}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">📋</span>
                    Product Details
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Product Name</td>
                        <td className="info-value">{product.name}</td>
                      </tr>
                      <tr>
                        <td className="info-label">SKU</td>
                        <td className="info-value">{product.sku}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Brand</td>
                        <td className="info-value">{product.brand}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Form</td>
                        <td className="info-value">Tablet</td>
                      </tr>
                      <tr>
                        <td className="info-label">Pack Size</td>
                        <td className="info-value">{selectedPackSize} Tablets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">📆</span>
                    Batch Details
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Batch Number</td>
                        <td className="info-value">{product.batchDetails.batchNumber}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Manufacturing Date</td>
                        <td className="info-value">{product.batchDetails.mfgDate}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Expiry Date</td>
                        <td className="info-value">{product.batchDetails.expiryDate}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Shelf Life</td>
                        <td className="info-value">24 Months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">⚠️</span>
                    Storage & Warnings
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Storage</td>
                        <td className="info-value">{product.storageInstructions}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Warnings</td>
                        <td className="info-value">{product.warnings}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Reviews Tab Content */}
            <div className={`tab-content ${activeTab === 'reviews' ? 'active' : ''}`} id="reviews">
              <div className="review-summary">
                <div className="review-average">
                  <div className="average-rating">{product.rating}</div>
                  <div className="average-stars">{renderStars(product.rating)}</div>
                  <div className="average-text">Based on {product.reviewCount} reviews</div>
                </div>
                
                <div className="review-distribution">
                  <div className="rating-bars">
                    {ratingDistribution.map((item) => (
                      <div key={item.rating} className="rating-bar">
                        <div className="rating-level">{item.rating} Star</div>
                        <div className="rating-progress">
                          <div className="rating-fill" style={{width: `${item.percentage}%`}}></div>
                        </div>
                        <div className="rating-percent">{item.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="review-actions">
                <div className="filter-dropdown">
                  <div className="dropdown-toggle">
                    Sort by: Most Recent <span>▼</span>
                  </div>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">Most Recent</div>
                    <div className="dropdown-item">Highest Rating</div>
                    <div className="dropdown-item">Lowest Rating</div>
                    <div className="dropdown-item">Most Helpful</div>
                  </div>
                </div>
                
                <button className="btn btn-primary write-review-btn">Write a Review</button>
              </div>
              
              <div className="review-list">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="reviewer-avatar">{review.avatar}</div>
                        <div className="reviewer-details">
                          <div className="reviewer-name">{review.name}</div>
                          <div className="review-date">Verified Purchase • {review.date}</div>
                        </div>
                      </div>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <div className="review-content">
                      {review.content}
                    </div>
                    
                    {review.images.length > 0 && (
                      <div className="review-images">
                        {review.images.map((img, index) => (
                          <img key={index} src={img} alt="Review" className="review-img" />
                        ))}
                      </div>
                    )}
                    
                    <div className="review-footer">
                      <div className="review-helpful">
                        Was this helpful? <button className="helpful-btn">👍 Yes ({review.helpful})</button>
                      </div>
                      <div>Report</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shipping Tab Content */}
            <div className={`tab-content ${activeTab === 'shipping' ? 'active' : ''}`}>
              <div className="shipping-info">
                <div className="description-section">
                  <h3 className="section-title">Shipping Information</h3>
                  <p className="description-text">
                    We offer fast and reliable shipping across the country. Orders are typically processed within 24 hours and delivered within 1-3 business days depending on your location.
                  </p>
                  <ul className="description-list">
                    <li>Free standard shipping on orders above ₹499</li>
                    <li>Express delivery available for select locations (additional charges may apply)</li>
                    <li>Cash on delivery available for orders under ₹5000</li>
                    <li>Track your order in real-time through our app or website</li>
                  </ul>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Return Policy</h3>
                  <p className="description-text">
                    Due to the nature of pharmaceutical products, medicines and healthcare products have specific return policies:
                  </p>
                  <ul className="description-list">
                    <li>Medicine returns are accepted only if there is a discrepancy or damage in the shipment</li>
                    <li>Return requests must be placed within 24 hours of delivery</li>
                    <li>Products must be unopened and in their original packaging</li>
                    <li>Prescription medicines cannot be returned once dispensed unless theres a quality issue</li>
                    <li>Refunds will be processed within 5-7 working days after inspection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <div className="similar-products">
            <h2 className="section-title">Similar Products</h2>
            <div className="product-grid">
              {similarProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-badge">{product.discount}% OFF</div>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <div className="product-brand">{product.brand}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      {renderStars(product.rating)}
                    </div>
                    <div className="product-prices">
                      <div className="current-price">₹{product.price.toFixed(2)}</div>
                      <div className="old-price">₹{product.originalPrice.toFixed(2)}</div>
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </main>
        </div>
        </>
    )
}

export default Detail