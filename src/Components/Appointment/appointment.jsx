import React, { useState } from "react";
import DatePicker from "react-datepicker";
import '../../Styles/Appointment/appointment.css';

import "react-datepicker/dist/react-datepicker.css";

const Appointment = ({startDate :intialDate}) => {
    const [startDate, setStartDate] = useState(intialDate || new Date());
    const [value, onChange] = useState('10:00');
    return (
        <>
            <div className="appointment-section">
                <div className="container-xxl py-5">
                    <div className="row g-5">
                        {/* Left Section - Contact Info */}
                        <div className="col-lg-6 wow fadeInUp appointment-info" data-wow-delay="0.1s">
                            <p className="appointment-badge d-inline-block border rounded-pill py-1 px-4">
                                Appointment
                            </p>
                            <h1 className="appointment-title">
                                Make An Appointment To Visit Our Doctor
                            </h1>
                        </div>

                        {/* Right Section - Appointment Form */}
                        <div className="col-lg-6 wow fadeInUp form" data-wow-delay="0.5s">
                            <div className="appointment-form bg-light rounded h-100 d-flex align-items-center p-5">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Name" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Mobile" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0">
                                                <option selected>Choose Doctor</option>
                                                <option value="1">Cardiologist</option>
                                                <option value="2">Dermatologist</option>
                                                <option value="3">Pediatrician</option>
                                                <option value="4">Entry later</option>
                                                <option value="5">Entry later</option>
                                                <option value="6">Entry later</option>
                                                <option value="7">Entry later</option>
                                                <option value="8">Entry later</option>
                                                <option value="9">Entry later</option>
                                                <option value="10">Entry later</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="date-picker col-12 col-sm-6" id="date" data-target-input="nearest">
                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Choose Date" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="time-picker" id="time" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 datetimepicker-input"
                                                    placeholder="Choose Time"
                                                    data-target="#time"
                                                    data-toggle="datetimepicker"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" rows="5" placeholder="Describe your problem"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appointment;
