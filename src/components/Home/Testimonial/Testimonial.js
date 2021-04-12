import React from 'react';

const Testimonial = (props) => {
    console.log(props)
    const {quote, name, img, from} = props.testimonial;
    return (
        <div className="card shadow-sm ">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={img} width="60" alt="" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            
        </div>
        
    );
};

export default Testimonial;