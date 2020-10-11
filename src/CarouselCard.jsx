import React from 'react'
const CarouselCard = (props) => {
    return (
        <div id="demo" class="carousel slide" data-ride="carousel">


        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className='container-fluid  col-10 mx-auto'>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img height='300' width='550' src={props.source1} alt="Los Angeles" />
                </div>
                <div class="carousel-item">
                    <img height='300' width='550' src={props.source2}alt="Chicago" />
                </div>
                <div class="carousel-item">
                    <img height='300' width='550' src={props.source3} alt="New York" />
                </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>
    </div>
       
    );
}

export default CarouselCard;