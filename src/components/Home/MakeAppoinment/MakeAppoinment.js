import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5 content">
                        <h5 className="text-primary text-uppercase">Appointment</h5>
                        <h1 className="my-4 text-white">Make an Appointment <br/> Today</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, explicabo!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;