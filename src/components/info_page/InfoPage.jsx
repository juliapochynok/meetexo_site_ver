import React, { Component } from 'react'
import './InfoPage.css';
import Navigator from '../general/Navigator';
import Footer from '../general/Footer';


let info = "EXO (Korean: 엑소) is a South Korean–Chinese boy band based in Seoul, with nine members. The band was formed by SM Entertainment in 2011 and debuted in 2012. Their music incorporates genres like pop, hip-hop, and R&B, alongside electronic dance music genres like house, trap, and synth-pop. EXO releases and performs music in Korean, Mandarin, and Japanese. The band ranked as one of the top five most influential celebrities on the Forbes Korea Power Celebrity list each year from 2014 to 2018, and have been named 'the biggest boy band in the world' and the 'kings of K-pop' by media outlets." 
// +
// "Since EXO's first headlining tour in 2014, the band has performed over 100 concerts across four tours and has participated in multiple joint tours. EXO is also known for its work beyond music, which includes endorsement deals with brands such as Nature Republic and Samsung, and philanthropic efforts such as Smile For U, a joint SM Entertainment and UNICEF project that began in 2015, and in which EXO continues to participate."
export default class InfoPage extends Component {
    render() {
        return (
        <div className='InfoPage'>
            <video className="video1" loop autoPlay>
                <source src='assets/videoplayback.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Navigator />
            <h1 className="WHO">who is EXO?</h1>
            <div >
                <h1 className="introEXO">{info}</h1>
            </div>
            <Footer />
        </div>
        )
    }
}