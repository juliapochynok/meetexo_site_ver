import React, { Component } from 'react'
import './News.css';


export default class News extends Component {
    render() {
        return (
            <div className="NewsMain">
                <h1 className="CaptionNews">NEWS</h1>
                <p ><a className="New" href="https://www.soompi.com/article/1397570wpp/exos-suho-to-reportedly-appear-on-season-3-of-busted-to-show-support-for-sehun">&#8674; EXO’s Suho To Reportedly Appear On Season 3 Of “Busted!” To Show Support For Sehun</a></p>
                <p ><a className="New" href="https://www.soompi.com/article/1397341wpp/sm-entertainment-confirms-exos-chen-and-his-wife-have-welcomed-1st-child">&#8674; SM Entertainment Confirms EXO’s Chen And His Wife Have Welcomed 1st Child</a></p> 
                <p ><a className="New" href="https://www.soompi.com/article/1397275wpp/bol4-announces-comeback-date-pre-release-track-to-feature-exos-baekhyun">&#8674; BOL4 Announces Comeback Date + Pre-Release Track To Feature EXO’s Baekhyun</a></p> 
                <p ><a className="New" href="https://www.soompi.com/article/1395844wpp/exos-baekhyun-to-reportedly-make-spring-comeback-as-solo-artist">&#8674; Update: EXO’s Baekhyun Confirmed To Make Spring Comeback As Solo Artist</a></p>
            </div>
        )
    }
}