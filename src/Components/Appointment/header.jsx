import "../../Styles/Appointment/header.css";

const Header = () => {
    return (
        <div className="section">
        <div className="container-fluid header">
        <div className="row">
            <div className="content">
                <h1 className="title">Good Health Is The Root Of All Happiness</h1>
                <div className="stats">
                    <div className="stat">
                        <h2 className="counter">123</h2>
                        <p>Expert Doctors</p>
                    </div>
                    <div className="stat">
                        <h2 className="counter">1234</h2>
                        <p>Medical Staff</p>
                    </div>
                    <div className="stat">
                        <h2 className="counter">12345</h2>
                        <p>Total Patients</p>
                    </div>
                </div>
                <div className="image">
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa0YKJcHvXv_AKInLCY0YBxYJ0YyAfhZ3JjuP5amaSqQ4Qw-cCuQWxsA&s" alt="picture" />
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Header;
