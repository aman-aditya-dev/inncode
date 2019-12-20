import React, {Component} from 'react';
import slidefirst from '../../../assets/slidefirst.jpg';
import slidesecond from '../../../assets/slidesecond.jpg';
import slidethird from '../../../assets/slidethird.jpg';
import {Carousel} from 'react-bootstrap';
export default class CarouselBanner extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img width={1600} height={200} alt="900x500" src={slidefirst} />
                    <Carousel.Caption>
                    <h3>Website Development and Designing</h3>
                    <p>India's leading Website Designers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1600} height={200} alt="200x500" src={slidesecond} />
                    <Carousel.Caption>
                    <h3>Server Solution Specialists</h3>
                    <p>Stay on top using Cloud Solutions </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1600} height={200} alt="200x500" src={slidethird} />
                    <Carousel.Caption>
                    <h3>Job Support</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}