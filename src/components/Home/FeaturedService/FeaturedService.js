import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-mb-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care,</h1>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur beatae repellat pariatur tempore id hic distinctio dolores commodi voluptatum excepturi assumenda voluptatibus, optio dicta iusto sint? Sit, blanditiis inventore quia reiciendis necessitatibus esse magni fuga expedita, corrupti dolor amet neque repellat repudiandae accusantium harum fugit. Eum similique sed velit.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;