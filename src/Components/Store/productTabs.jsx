const ProductTabs = () => {
    return(
        <>
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
        </>
    )
}

export default ProductTabs