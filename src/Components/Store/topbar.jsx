import '../../Styles/Store/topbar.css';
import med_logo from '../../assets/med_logo.png';


const Top = () => {
    return(
        <>
        <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="logo">
              <div className="logo-icon"></div>
              <div className="logo-text">
              <img className="logo" src={med_logo} alt="Medical Logo" />
                Medi<span>Plus</span></div>
            </div>
            
            <div className="search-container">
              <div className="search-box">
                <input type="text" className="search-input" placeholder="Search medicines, health products and more..." />
                <button className="search-button">Search</button>
              </div>
            </div>
            
            <div className="header-actions">
              <a href="#" className="action-item">
                <div className="action-icon">👤</div>
                <div className="action-text">Account</div>
              </a>
              <a href="#" className="action-item">
                <div className="action-icon">❤️</div>
                <div className="action-text">Wishlist</div>
                <span className="badge">2</span>
              </a>
              <a href="#" className="action-item">
                <div className="action-icon">🛒</div>
                <div className="action-text">Cart</div>
                <span className="badge">3</span>
              </a>
            </div>
          </div>
        </div>
        
      </header>
      <div className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">›</span>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-link">Healthcare</a>
              <span className="breadcrumb-separator">›</span>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-link">Liver Care</a>
              <span className="breadcrumb-separator">›</span>
            </li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default Top