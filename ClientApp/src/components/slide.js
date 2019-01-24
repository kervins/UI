import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
    render: function () {
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("slides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000);
            // Change image every 2 seconds
            return (
                <div className={showSlide}>
                    ksk, {Hello}
                </div>
            )
        }
    }
}

//ReactDOM.render(<Hello />, document.getElementById('container'));