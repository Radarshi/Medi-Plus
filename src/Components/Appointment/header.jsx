import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../Styles/Appointment/header.css";

const Header = () => {
    return (
        <div className="container-fluid header bg-primary p-0 mb-5 section">
            <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6 p-5">
                    <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Happiness</h1>
                    <div className="row g-4">
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
                                <p className="text-light mb-0">Expert Doctors</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
                                <p className="text-light mb-0">Medical Staff</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
                                <p className="text-light mb-0">Total Patients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
