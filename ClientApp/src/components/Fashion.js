import React, { Component } from 'react';
import voguerunway from '../Pictures/voguerunway.jpg';
import blw from '../Pictures/blw.jpg';
import jp from '../Pictures/jp.jpg';
import afr from '../Pictures/afr.jpg';
import './Fashion.css';

export class Fashion extends Component {
    displayName = Fashion.name
    render() {
        return (
            <div className="slide">
                <script src= "." />
                <h1 className="hth">Fashion Page 1</h1>
                <div className="mysl">
                    <img src={voguerunway} className="ims" />
                        <div className="caption"> 
                            Caption 
                        </div>
                </div>
                <div className="mysl">
                    <img src={blw} className="ims" />
                    <div className="caption"> 
                        Caption 
                    </div>
                </div>
            </div>
        );
    }
}

//