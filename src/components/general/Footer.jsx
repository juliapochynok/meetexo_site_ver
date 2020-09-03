import React, { Component } from 'react';
import './Footer.css'


export default class Footer extends Component {
    render() {
        return (
         <div className="Footer1">
            <a href="https://www.instagram.com/weareone.exo/?hl=uk"  className="SNS"><img className="SNSPic"  src="assets/insta.webp" alt="inst-logo" /></a>
            <a href="https://twitter.com/weareoneexo" className="SNS"><img className="SNSPic" src="assets/twt.png" alt="twt-logo" /></a>
            <a href="https://www.youtube.com/channel/UCzCedBCSSltI1TFd3bKyN6g" className="SNS"><img  className="SNSPic" src="assets/youtube.png" alt="yt-logo" /></a>
            <a href="http://exo.smtown.com/" className="SNS"><img className="SNSPic" src="assets/logo.png" alt="exo-logo" /></a>
            <a href="https://www.smtown.com/" className="SNS"><img className="SNSPic" src="assets/SM.png" alt="sm-logo" /></a>
         </div>
        )
    }
}
