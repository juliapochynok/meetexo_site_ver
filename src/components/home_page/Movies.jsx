import React, { Component } from 'react'
import {  Carousel } from 'react-bootstrap';
import ReactPlayer from "react-player";
import './Movies.css';


export default class Movie extends Component {
    render() {
        return (
            <div className="MoviesMain">
                <h1 className="CaptionMovies">MOVIES</h1>

                <Carousel className="Carousel2" indicators='fasle'>
                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=Ygrv55VRRas"
                    />
                    </Carousel.Item>


                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=KSH-FVVtTf0"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=pSudEWBAYRE"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=tbe3pe2BtwA"
                    />
                    
                    </Carousel.Item>

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=-EfjXQgE1e8"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=iwd8N6K-sLk"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=leu-cTvMWTA"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=uxmP4b2a0uY"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=Ib674A1yMtg"
                    />
                    
                    </Carousel.Item >

                    <Carousel.Item className="ItemCar2">
                    <ReactPlayer className="Player"
                    url="https://www.youtube.com/watch?v=AO1OqWwKj1A"
                    />
                    
                    </Carousel.Item >

                </Carousel>
          </div>
        )
    }
}

